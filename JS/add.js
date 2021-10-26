(function (){
    const ul = document.querySelector('ul');
    const btnShow = document.querySelector(".show");
    const btnMix = document.querySelector(".mix");
    const imagesBlock = document.querySelector(".images");

    btnShow.addEventListener('click', showPic);

    function showPic () {
        for (i = 1; i <= 10; i++) {
            ul.innerHTML += '<li><img src="IMG/download(' + [i] + ').jfif"></li>';
        }
        btnShow.style.display = "none";

        const img = document.querySelectorAll(".images>ul>li>img");
        const li = document.querySelectorAll('.images>ul>li');

        for (let images of img) {
            btnMix.addEventListener('click', mixPic);

            function mixPic() {
                images.src = 'IMG/download(' + Math.floor((Math.random() * li.length) + 1) + ').jfif';
            }

            images.addEventListener('click', changePic)

            function changePic() {
                images.src = 'IMG/download(7).jfif';
            }

        }

    }

})();
