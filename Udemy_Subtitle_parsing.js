// 함수 선언과 동시에 실행 
(function(){
  var sub_pre = document.querySelectorAll('.vjs-text-track-display div div div')[0].textContent;
    //자막 없는 구간 에러처리
  onerror = handleErr;
    function handleErr(msg,url,l)
    {return true};
    //자막 바뀔때마다 함수 실행, console에 출력하도록 함
  setInterval(function(){
        var sub_cur = document.querySelectorAll('.vjs-text-track-display div div div')[0].textContent;
        if(sub_cur.length != sub_pre.length){
          console.log(sub_cur)}
        sub_pre = sub_cur}, 1500); // 자막 확인 시간 1.5초
}())