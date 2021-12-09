


class ValInWords extends HTMLElement {
  connectedCallback() {
      var thing = this.attributes.title.value
      var width = this.attributes.width.value

      this.innerHTML = /*html*/`
        ${thing}
      `;

      this.style.backgroundColor = "#91B9CC";
      this.style.borderRadius = "15px";
      this.style.border = "solid 1px #3f7e9b"

      this.style.textAlign = "center";
      this.style.fontWeight = "bold";
      // this.style.fontSize = "small"
      this.style.fontSize = "80%"
      this.style.color = "white";
      this.style.display = 'inline-block';
      // this.style.width = "150px "
      this.style.width = width
    }
}
customElements.define('val-in-words', ValInWords);

// ####################### CostPerTon #######################
class CostPerTon extends HTMLElement {
    connectedCallback() {
      this.innerHTML = /*html*/`
      <r-dynamic class="costperton" onmouseover="hoverByClass('costperton','#E4FFED')" 
      bind="costperton" after=" dollars per tonne" min="0" max="1000"></r-dynamic> 
      `;
    }
  }
customElements.define('cost-per-ton', CostPerTon);

class CostPerTonText extends HTMLElement {
  connectedCallback() {
    var width = this.attributes.width.value

    this.innerHTML = /*html*/`
    <val-in-words title="Cost per tonne" width=${width} class="costperton" 
    onmouseover="hoverByClass('costperton','#E4FFED')"></val-in-words> 
    `;
  }
}
customElements.define('cost-per-ton-text', CostPerTonText);


// ####################### DAC Learning Rate #######################
class DACLearningCurveRate extends HTMLElement {
    connectedCallback() {
      this.innerHTML = /*html*/`
      <r-dynamic class="dacLearningCurve" onmouseover="hoverByClass('dacLearningCurve','#E4FFED')" 
      bind="dacLearningCurve" after="%" min="0" max="100" step="0.01"></r-dynamic> 
  `;
    }
  }
customElements.define('dac-learning-rate', DACLearningCurveRate);

class DACLearningCurveRateText extends HTMLElement {
  connectedCallback() {
    var width = this.attributes.width.value

    this.innerHTML = /*html*/`
    <val-in-words title="Learning rate" width=${width} class="dacLearningCurve" 
    onmouseover="hoverByClass('dacLearningCurve','#E4FFED')"></val-in-words>
    `;
  }
}
customElements.define('dac-learning-rate-text', DACLearningCurveRateText);

// ####################### % cost decrease #######################
class PercCostDecrText extends HTMLElement {
  connectedCallback() {
    var width = this.attributes.width.value

    this.innerHTML = /*html*/`
    <val-in-words title="% cost decrease" width=${width} class="percCostDecerase" 
    onmouseover="hoverByClass('percCostDecerase','#E4FFED')"></val-in-words>
    `;
  }
}
customElements.define('perc-cost-decr-text', PercCostDecrText);


// ####################### YearsToHundredDollars #######################
class YearsToHundredDollars extends HTMLElement {
    connectedCallback() {
      this.innerHTML = /*html*/`
      <r-display class="yearsToHundredDollars" onmouseover="hoverByClass('yearsToHundredDollars','#E0EEF2')" 
          bind="yearsToHundredDollars" onclick="sidebar('yearsUntilHundredDollars')"></r-display>
  `;
    }
  }
customElements.define('years-to-hundred-dollars', YearsToHundredDollars);

class YearsToHundredDollarsText extends HTMLElement {
  connectedCallback() {
    var width = this.attributes.width.value

    this.innerHTML = /*html*/`
    <val-in-words title="Years" width=${width} class="yearsToHundredDollars" 
    onmouseover="hoverByClass('yearsToHundredDollars','#E4FFED')"></val-in-words>
    `;
  }
}
customElements.define('years-to-ten-hundred-text', YearsToHundredDollarsText);

// ####################### YearsToTenDollars #######################
class YearsToTenDollars extends HTMLElement {
    connectedCallback() {
      this.innerHTML = /*html*/`
      <r-display class="yearsToTenDollars" onmouseover="hoverByClass('yearsToTenDollars','#E0EEF2')" 
          bind="yearsToTenDollars" onclick="sidebar('yearsUntilTenDollars')"></r-display> 
  `;
    }
  }
customElements.define('years-to-ten-dollars', YearsToTenDollars);

class YearsToTenDollarsText extends HTMLElement {
  connectedCallback() {
    var width = this.attributes.width.value

    this.innerHTML = /*html*/`
    <val-in-words title="Years" width=${width} class="yearsToTenDollars" 
    onmouseover="hoverByClass('yearsToTenDollars','#E4FFED')"></val-in-words>
    `;
  }
}
customElements.define('years-to-ten-dollars-text', YearsToTenDollarsText);


// ####################### CONSTANT VALUES #######################

class ConstantVal extends HTMLElement {
    connectedCallback() {
        var thing = this.attributes.constval.value
      this.innerHTML = /*html*/`
      ${thing}
  `;
    this.style.color = "#db437d";
    this.style.fontWeight = "bold";
    }
  }
customElements.define('constant-val', ConstantVal);

class TenDollars extends HTMLElement {
    connectedCallback() {
      this.innerHTML = /*html*/`
      
      $<constant-val constval="10" class="TenDollars" onmouseover="hoverByClass('TenDollars','#f0c5d6')" 
          ></constant-val>
  `;
    }
  }
customElements.define('ten-dollars', TenDollars);

class HundredDollars extends HTMLElement {
    connectedCallback() {
      this.innerHTML = /*html*/`
        $<constant-val constval="100" class="HundredDollars" onmouseover="hoverByClass('HundredDollars','#f0c5d6')" 
        ></constant-val>
  `;
    }
  }
customElements.define('hundred-dollars', HundredDollars);



