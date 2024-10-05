document.getElementById("downloadBtn").addEventListener("click", function () {
  const element = document.body;
  document.getElementById("downloadBtn").style.display = "none";
  document.getElementsByTagName("footer")[0].style.display = "none";
  const opt = {
      margin:       0,
      filename:     'OsamaBenali-Portfolio.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 1 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
  };
  html2pdf().from(element).set(opt).save().then(()=>{
    document.getElementById("downloadBtn").style.display = "inline";
    document.getElementsByTagName("footer")[0].style.display = "block";
  })
});