const canvas = document.getElementById('canvas');

class Slider {
    constructor (rangeElement, valueElement, options) {
      this.rangeElement = rangeElement
      this.valueElement = valueElement
      this.options = options
  
      // Attach a listener to "change" event
      this.rangeElement.addEventListener('input', this.updateSlider.bind(this))
    }
  
    // Initialize the slider
    init() {
      this.rangeElement.setAttribute('min', options.min)
      this.rangeElement.setAttribute('max', options.max)
      this.rangeElement.value = options.cur
  
      this.updateSlider()
    }
  
    // Format the label
    asDimension(value) {
      return `${value} x ${value}`;
    }
  
    generateBackground(rangeElement) {   
      if (this.rangeElement.value === this.options.min) {
        return
      }
  
      let percentage =  (this.rangeElement.value - this.options.min) / (this.options.max - this.options.min) * 100
      return 'background: linear-gradient(to right, #50299c, #7a00ff ' + percentage + '%, #d3edff ' + percentage + '%, #dee1e2 100%)'
    }
  
    updateSlider (newValue) {
        this.valueElement.textContent = this.asDimension(this.rangeElement.value)
        this.rangeElement.style = this.generateBackground(this.rangeElement.value)

        // delete old grid
        canvas.replaceChildren();
        // generate new grid
        generateGrid(this.rangeElement.value);
    }
  }
  
  let rangeElement = document.querySelector('.range [type="range"]')
  let valueElement = document.querySelector('.range .rangeValue span') 
  
  let options = {
    min: 1,
    max: 64,
    cur: 16
  }
  
  if (rangeElement) {
    let slider = new Slider(rangeElement, valueElement, options)
    
    slider.init()
  }