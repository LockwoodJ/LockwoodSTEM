
(function(){
  function slugifyName(name){return String(name||'STUDENT').trim().toUpperCase().replace(/[^A-Z0-9]+/g,'').slice(0,8) || 'STUDENT';}
  function makeCertId(level, name){
    const d = new Date();
    const stamp = d.getFullYear().toString()+String(d.getMonth()+1).padStart(2,'0')+String(d.getDate()).padStart(2,'0');
    const seed = slugifyName(name) + level + stamp;
    let hash = 0;
    for(let i=0;i<seed.length;i++){ hash = ((hash<<5)-hash) + seed.charCodeAt(i); hash |= 0; }
    return `LS-FAB-${level}-${stamp}-${Math.abs(hash).toString(36).toUpperCase().slice(0,5)}`;
  }
  function todayText(){return new Date().toLocaleDateString(undefined,{year:'numeric',month:'long',day:'numeric'});}
  window.gradeCertificationTest = function(){
    const page = document.querySelector('.cert-test-page');
    const questions = Array.from(document.querySelectorAll('.question'));
    const nameEl = document.getElementById('studentName');
    const periodEl = document.getElementById('studentPeriod');
    const level = page?.dataset.level || 'Level';
    const levelTitle = page?.dataset.levelTitle || `Level ${level}`;
    const testTitle = page?.dataset.testTitle || `FabLab Level ${level} Certification`;
    const studentName = (nameEl?.value || '').trim();
    const period = (periodEl?.value || '').trim();
    const result = document.getElementById('testResult');
    if(!studentName){
      result.className='result-box fail';
      result.innerHTML='Please enter your full name before submitting the test.';
      nameEl?.focus();
      return;
    }
    let answered=0, correct=0;
    questions.forEach((q,idx)=>{
      const chosen = q.querySelector('input[type="radio"]:checked');
      q.style.borderColor='rgba(0,51,153,.12)';
      if(chosen){answered++; if(chosen.value === q.dataset.answer){correct++;}}
      else{q.style.borderColor='#f97316';}
    });
    if(answered < questions.length){
      result.className='result-box fail';
      result.innerHTML=`Please answer all questions before submitting. You have answered ${answered} of ${questions.length}.`;
      return;
    }
    const pct = Math.round((correct/questions.length)*100);
    const passed = pct >= 80;
    result.className = 'result-box ' + (passed ? 'pass' : 'fail');
    result.innerHTML = passed
      ? `Passed: ${correct}/${questions.length} = ${pct}%. Your certificate is ready below.`
      : `Not yet: ${correct}/${questions.length} = ${pct}%. You need 80% or higher. Review the level training and try again.`;
    const certWrap = document.getElementById('certificateWrap');
    if(passed){
      const certId = makeCertId(level, studentName);
      document.getElementById('certStudent').textContent = studentName;
      document.getElementById('certLevel').textContent = levelTitle;
      document.getElementById('certScore').textContent = `${pct}% (${correct}/${questions.length})`;
      document.getElementById('certDate').textContent = todayText();
      document.getElementById('certId').textContent = certId;
      document.getElementById('certPeriod').textContent = period || 'Not listed';
      document.getElementById('certTitle').textContent = testTitle;
      certWrap.style.display='block';
      try{ localStorage.setItem('lockwood_fablab_cert_'+level, JSON.stringify({studentName,period,pct,correct,total:questions.length,certId,date:todayText()})); }catch(e){}
      certWrap.scrollIntoView({behavior:'smooth',block:'start'});
    }else{
      certWrap.style.display='none';
    }
  };
  window.printCertificate = function(){ window.print(); };
})();
