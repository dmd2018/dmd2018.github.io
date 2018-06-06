var html = "";
var number = 0;
    $.ajax({
       type: "GET",
       url: "js/data.json",
       dataType: "json",
       cache: false,
       contentType: "application/json",
       success: function(data) {
        $.each(data, function(i, item) {
          html = '<div ' + data[i].attr + ' class="project col col-3 ' + data[i].type +'">';
          html += '<a href="#"></a>';
          html += '<img src="'+ data[i].image + '"alt="" onerror="this.src="http://digitalpolymer.com/image/cache/catalog/no_image-1024x1269.jpg"">';
          html += '<h2>'+ data[i].project + '</h2>';
          html += '<h3 class="name">'+ data[i].person +'</h3>'
          html += '<p>' + data[i].short + '</p></div>'
          $('.project-div').append(html);

          $('.project').click(function(e){
            e.preventDefault();
            $(".project-info").css("opacity", "1");
            $(".project-info").css("top", "50%");
            $(".project-info").css("left", "50%");
            $("body").css("overflow", "hidden");
            $(".overlay").css("opacity", "0.5");
            $(".overlay").css("visibility", "visible");
            if (this.hasAttribute("data-sam")) {
              number = 0;
             }
             else if (this.hasAttribute("data-adam")) {
               number = 1;
             }
             else if (this.hasAttribute("data-tessa")) {
               number = 2;
             } else if (this.hasAttribute("data-amyw")) {
               number = 3;
             } else if (this.hasAttribute("data-katie")) {
               number = 4;
             } else if (this.hasAttribute("data-becky")) {
               number = 5;
             } else if (this.hasAttribute("data-abbien")) {
               number = 6;
             } else if (this.hasAttribute("data-terry")) {
               number = 7;
             } else if (this.hasAttribute("data-amyp")) {
               number = 8;
             } else if (this.hasAttribute("data-grace")) {
               number = 9;
             } else if (this.hasAttribute("data-tim")) {
               number = 10;
             } else if (this.hasAttribute("data-hallam")) {
               number = 11;
             } else if (this.hasAttribute("data-michael")) {
               number = 12;
             }else if (this.hasAttribute("data-kyle")) {
               number = 13;
             } else if (this.hasAttribute("data-matt")) {
               number = 14;
             } else if (this.hasAttribute("data-luke")) {
               number = 15;
             } else if (this.hasAttribute("data-joel")) {
               number = 16;
             } else if (this.hasAttribute("data-verity")) {
               number = 17;
             } else if (this.hasAttribute("data-nibia")) {
               number = 18;
             } else if (this.hasAttribute("data-mark")) {
               number = 19;
             } else if (this.hasAttribute("data-amyc")) {
               number = 20;
             } else if (this.hasAttribute("data-giancarlo")) {
               number = 21;

             }
            $(".project-info-img").attr("src", data[number].image);
            $(".project-info-title").text(data[number].project);
            $(".project-info-name").text(data[number].person);
            $(".project-info-words").text(data[number].long);
            $(".project-info-email").text(data[number].email);
            $(".project-info-email").attr('href', "mailto:" + data[number].email);

          });

})
      },
        error: function(xhr, status, error) {
              console.log(error);
        }
    });


    $( document ).ready(function() {
      $(".project-link-type").click(function() {
          $('.project').css('display', 'none')
          if ( $(this).attr('data-type') === 'app' ) {
            $('.app').css('display', 'block')
          } else if ($(this).attr('data-type') === 'installation') {
            $('.installation').css('display', 'block')
          } else if ($(this).attr('data-type') === 'graphic') {
            $('.graphic').css('display', 'block')
          } else if ($(this).attr('data-type') === 'website') {
            $('.website').css('display', 'block')
          } else if ($(this).attr('data-type') === 'all') {
            $('.project').css('display', 'block')
          } else if ($(this).attr('data-type') === 'other') {
            $('.other').css('display', 'block')
          }
    });



    $(".scroll").click(function(e) {
        e.preventDefault();
        var aid = $(this).attr("href");
        $('html,body').animate({scrollTop: $(aid).offset().top},'slow');
    });


    $(window).scroll(function(){
        if ($(window).scrollTop() >= 50) {
            $('nav').addClass('fixed-nav');
        }
        else {
            $('nav').removeClass('fixed-nav');
        }
    });


      $(document).click(function(e) {
        if ($(".project-info").css("opacity") === "1") {
          $(".project-info").css("left", "-100px");
          $(".project-info").css("opacity", "0");
          $("body").css("overflow", "scroll");
          $(".overlay").css("opacity", "0");
          $(".overlay").css("visibility", "hidden");
        }
      });
    });


    var colors = new Array(
      [62,35,255],
      [60,255,60],
      [255,35,98],
      [45,175,230],
      [255,0,255],
      [255,128,0]);

    var step = 0;
    //color table indices for:
    // current color left
    // next color left
    // current color right
    // next color right
    var colorIndices = [0,1,2,3];

    //transition speed
    var gradientSpeed = 0.002;

    function updateGradient()
    {

      if ( $===undefined ) return;

    var c0_0 = colors[colorIndices[0]];
    var c0_1 = colors[colorIndices[1]];
    var c1_0 = colors[colorIndices[2]];
    var c1_1 = colors[colorIndices[3]];

    var istep = 1 - step;
    var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
    var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
    var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
    var color1 = "rgb("+r1+","+g1+","+b1+")";

    var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
    var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
    var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
    var color2 = "rgb("+r2+","+g2+","+b2+")";

     $('#gradient').css({
       background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
        background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});

      step += gradientSpeed;
      if ( step >= 1 )
      {
        step %= 1;
        colorIndices[0] = colorIndices[1];
        colorIndices[2] = colorIndices[3];

        //pick two new target color indices
        //do not pick the same as the current one
        colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
        colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;

      }
    }

    setInterval(updateGradient,10);
