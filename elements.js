


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

// ####################### reativeValTen #######################
class ReactiveValExample extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/`
    <r-dynamic class="reactiveValExample" onmouseover="hoverByClass('reactiveValExample','#E4FFED')" 
    bind="reactiveValExample" min="0" max="100"></r-dynamic> 
    `;
  }
}
customElements.define('reactive-val-example', ReactiveValExample);

class ReactiveValExampleText extends HTMLElement {
connectedCallback() {
  var width = this.attributes.width.value

  this.innerHTML = /*html*/`
  <val-in-words title="Reactive value" width=${width} class="reactiveValExample" 
  onmouseover="hoverByClass('reactiveValExample','#E4FFED')"></val-in-words> 
  `;
}
}
customElements.define('reactive-val-example-text', ReactiveValExampleText);

// ####################### CalculatedValExample #######################
class CalculatedValExample extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/`
    <r-display class="calculatedValExample" onmouseover="hoverByClass('calculatedValExample','#E4FFED')" 
    bind="calculatedValExample" onclick="sidebar('calculatedValExample')"></r-dynamic> 
    `;
  }
}
customElements.define('calculated-val-example', CalculatedValExample);

class CalculatedValExampleText extends HTMLElement {
connectedCallback() {
  var width = this.attributes.width.value

  this.innerHTML = /*html*/`
  <val-in-words title="Calculated value" width=${width} class="calculatedValExample" 
  onmouseover="hoverByClass('calculatedValExample','#E4FFED')"></val-in-words> 
  `;
}
}
customElements.define('calculated-val-example-text', CalculatedValExampleText);


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

// ####################### QuantityOfCO2 #######################
class QuantityOfCO2 extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/`
    <r-dynamic class="quantityofco2" onmouseover="hoverByClass('quantityofco2','#E4FFED')" 
    bind="quantityofco2" min="0" max="35000"></r-dynamic> 
    `;
  }
}
customElements.define('quantity-of-co2', QuantityOfCO2);

class QuantityOfCO2Text extends HTMLElement {
connectedCallback() {
  var width = this.attributes.width.value

  this.innerHTML = /*html*/`
  <val-in-words title="Quantity of CO₂" width=${width} class="quantityofco2" 
  onmouseover="hoverByClass('quantityofco2','#E4FFED')"></val-in-words> 
  `;
}
}
customElements.define('quantity-of-co2-text', QuantityOfCO2Text);

// ####################### TotalRemovalCost #######################
class TotalRemovalCost extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/`
    $<r-display class="totalRemovalCost" onmouseover="hoverByClass('totalRemovalCost','#E4FFED')" 
    bind="totalRemovalCost" after=" tonnes"  onclick=""></r-display> 
    `;
  }
}
customElements.define('total-removal-cost', TotalRemovalCost);

class TotalRemovalCostText extends HTMLElement {
connectedCallback() {
  var width = this.attributes.width.value

  this.innerHTML = /*html*/`
  <val-in-words title="Total cost" width=${width} class="totalRemovalCost" 
  onmouseover="hoverByClass('totalRemovalCost','#E4FFED')"></val-in-words> 
  `;
}
}
customElements.define('total-removal-cost-text', TotalRemovalCostText);

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
customElements.define('years-to-hundred-dollars-text', YearsToHundredDollarsText);

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

class ConstantExampleTen extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/`
    
    <constant-val constval="10" class="ConstantExampleTen" onmouseover="hoverByClass('ConstantExampleTen','#f0c5d6')" 
        ></constant-val>
`;
  }
}
customElements.define('constant-example-ten', ConstantExampleTen);

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


// ####################### DATA VALUES #######################

class DataVal extends HTMLElement {
  connectedCallback() {
      var thing = this.attributes.constval.value
    this.innerHTML = /*html*/`
    ${thing}
`;
  this.style.color = "#874dea";
  this.style.fontWeight = "bold";
  }
}
customElements.define('data-val', DataVal);

class USAEmissions extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/`
    <data-val constval="5.63 billion" class="USAEmissions" onmouseover="hoverByClass('USAEmissions','#e2d8f1')" 
        ></data-val>
`;
  }
}
customElements.define('usa-emissions', USAEmissions);

class USAPerCapitaEmissions extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/`
    <data-val constval="17" class="USAPerCapitaEmissions" onmouseover="hoverByClass('USAPerCapitaEmissions','#e2d8f1')" 
        ></data-val>
`;
  }
}
customElements.define('usa-per-capita-emissions', USAPerCapitaEmissions);

