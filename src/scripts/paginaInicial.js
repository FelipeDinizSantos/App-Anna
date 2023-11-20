class Main 
{
    redirectMenu()
    {
      const cards = document.querySelectorAll('.cartaoConteudo');

      const quemSomos = cards[2];
      const denuncias = cards[1];
      const apadrinhe = cards[0];

      quemSomos.addEventListener('click', () => 
      {
        window.location.href="./src/pages/quemSomos.html";
      })

      denuncias.addEventListener('click', ()=>
      {
        window.location.href="./src/pages/denuncia.html";
      })

      apadrinhe.addEventListener('click', ()=>
      {
        window.location.href="./src/pages/apadrinhe.html";
      })
    }

    controllerCarousel() 
    {
      const controls = document.querySelectorAll('.control');
      const items = document.querySelectorAll('.item');
      const maxItems = items.length;
      let currentItem = 0;
  
      function changeBanner(control) 
      {
        controls.forEach(control => control.classList.remove('currentControl'));
        control.classList.add('currentControl');
        const isLeft = control.classList.contains('btnLeft');
  
        if (isLeft) 
        {
          currentItem -= 1;
        }
        else
        {
          currentItem += 1;
        }
  
        if (currentItem >= maxItems) 
        {
          currentItem = maxItems - 1;
        }
        if (currentItem < 0) 
        {
          currentItem = 0; 
        }
  
        items.forEach(item =>
          {
            item.classList.remove('currentItem');
          });
  
        items[currentItem].classList.add("currentItem");
      }
  
      controls.forEach(control => 
        {
          control.addEventListener('click', () =>  
            {
              clearInterval(bannerChangeInterval);
              changeBanner(control);
              bannerChangeInterval = setInterval(autoChangeBanner, 5000); 
            });
        });
  
      let controlID = 0; 
      let bannerChangeInterval = setInterval(autoChangeBanner, 5000);
  
      function autoChangeBanner()
      {
        if (controlID >= controls.length) 
        {
          controlID = 0; 
        }
        changeBanner(controls[controlID]);
        controlID++;
      }
  
      window.addEventListener('load', () => {
        autoChangeBanner()
      });
    }

    static Main() 
      {
        const object = new Main();
        object.controllerCarousel();
        object.redirectMenu();
      }
}

Main.Main();