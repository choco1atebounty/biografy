$(document).ready(function(){
    
    //Добавляем Прелоадер
    $(".loaderArea").css("display", "none");
    
    //Калькулятор    
    function calculate(){
       let sum = parseInt($("#selectSite option:selected").val()) + 
       parseInt($("#selectDesign option:selected").val()) + 
       parseInt($("#selectAdaptive option:selected").val());
       let days = parseInt($("#selectSite option:selected").attr("days")) + 
       parseInt($("#selectDesign option:selected").attr("days")) + 
       parseInt($("#selectAdaptive option:selected").attr("days"));
        $(".price .digit").text(sum + " рублей");
        $(".days .digit").text(days + " дней");
    }
    calculate();
    $("select").on("change", function(){
       calculate();
    });

    document.documentElement.classList.remove('dark-mode');
    document.documentElement.classList.add('light-mode');
    
    //Плавный скроллинг к якорным ссылкам
    $("a[href^='#']").click(function(){
 let _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
                return false;
        });
    
    //Отложенная Анимации при скролле
        let options = {
            threshold: [0.5]
        };
        let observer = new IntersectionObserver(onEntry, options);
        let elements = $('.element-animation');

        elements.each((i, el) => {
            observer.observe(el);
        });


        function onEntry(entry) {
            entry.forEach(change => {
                if (change.isIntersecting) {
                    change.target.classList.add('element-show');
                }
            });
        }
    
    //Загрузка картинок при скролле
         let optionsImg = {
            threshold: [0.5]
        };
        let observerImg = new IntersectionObserver(onEntryImg, optionsImg);
        let elementsImg = $('.lazy_image');

        elementsImg.each((i, el) => {
            observerImg.observe(el);
        });


        function onEntryImg(entry) {
            entry.forEach(change => {
                if (change.isIntersecting) {
                    change.target.src = change.target.dataset.src;
                }
            });
        }

    
    });


