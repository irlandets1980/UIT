function slider_adaptation(){
    const slider = tns({
        container: '.carousel__inner',
        items: 4,
        slideBy: 'page',
        autoplay: false,
        arrows: true,
        controls: false,
      
        responsive: {
          1200: {
      
            items: 4
          },
          991: {
      
            items: 3
          },
          767: {
      
            items: 2
          },
          575: {
      
            items: 1
          },
          320: {
      
            items: 1
          }
      
        }
      
      });
}
module.exports = slider_adaptation;