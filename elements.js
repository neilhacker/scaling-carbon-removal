
function myFunction(x) {
  a_C1 = curvenote.getVariableByName("a_C1").get()
  return a_C1*x

}

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

// ###################################################################################################################
// ############################################## Reactive VALUES ##################################################
// ###################################################################################################################

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


// ####################### CostPerTon #######################
class CostPerTon extends HTMLElement {
    connectedCallback() {
      this.innerHTML = /*html*/`
      $<r-dynamic class="costperton" onmouseover="hoverByClass('costperton','#E4FFED')" 
      bind="costperton" after=" per tonne" min="0" max="1000"></r-dynamic> 
      `;
    }
  }
customElements.define('cost-per-ton', CostPerTon);

class CostPerTonText extends HTMLElement {
  connectedCallback() {
    var width = this.attributes.width.value

    this.innerHTML = /*html*/`
    <val-in-words title="Cost per tonne" width=${width} class="scaleOfCost_costperton" 
    onmouseover="hoverByClass('scaleOfCost_costperton','#E4FFED')"></val-in-words> 
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

// ####################### Low cost tech cost per ton #######################
class LowCostTechCostPerTon extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/`
    $<r-dynamic class="lowCostTechCostPerTon" onmouseover="hoverByClass('lowCostTechCostPerTon','#E4FFED')" 
    bind="lowCostTechCostPerTon" after="" min="0" max="200" step="0.1"></r-dynamic> 
`;
  }
}
customElements.define('low-cost-tech-cpt', LowCostTechCostPerTon);

// ####################### Low cost tech current tons removed #######################
class LowCostTechCurrentRemoval extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/`
    <r-dynamic class="lowCostTechCurrentRemoval" onmouseover="hoverByClass('lowCostTechCurrentRemoval','#E4FFED')" 
    bind="lowCostTechCurrentRemoval" after="" min="0" max="200" step="0.1"></r-dynamic> 
`;
  }
}
customElements.define('low-cost-tech-current-removal', LowCostTechCurrentRemoval);

// ####################### Low cost tech learning rate #######################
class LowCostTechLearningRate extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/`
    <r-dynamic class="lowCostTechLearningRate" onmouseover="hoverByClass('lowCostTechLearningRate','#E4FFED')" 
    bind="lowCostTechLearningRate" after="%" min="0" max="100" step="0.1"></r-dynamic> 
`;
  }
}
customElements.define('low-cost-tech-learning-rate', LowCostTechLearningRate);

// ####################### High cost tech cost per ton #######################
class HighCostTechCostPerTon extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/`
    $<r-dynamic class="highCostTechCostPerTon" onmouseover="hoverByClass('highCostTechCostPerTon','#E4FFED')" 
    bind="highCostTechCostPerTon" after="" min="0" max="200" step="0.1"></r-dynamic> 
`;
  }
}
customElements.define('high-cost-tech-cpt', HighCostTechCostPerTon);

// ####################### High cost tech current tons removed #######################
class HighCostTechCurrentRemoval extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/`
    <r-dynamic class="highCostTechCurrentRemoval" onmouseover="hoverByClass('highCostTechCurrentRemoval','#E4FFED')" 
    bind="highCostTechCurrentRemoval" after="" min="0" max="200" step="0.1"></r-dynamic> 
`;
  }
}
customElements.define('high-cost-tech-current-removal', HighCostTechCurrentRemoval);

// ####################### High cost tech learning rate #######################
class HighCostTechLearningRate extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/`
    <r-dynamic class="highCostTechLearningRate" onmouseover="hoverByClass('highCostTechLearningRate','#E4FFED')" 
    bind="highCostTechLearningRate" after="%" min="0" max="100" step="0.1"></r-dynamic> 
`;
  }
}
customElements.define('high-cost-tech-learning-rate', HighCostTechLearningRate);

// ####################### Percent Carbon From Low Cost Tech #######################
class PercCarbonFromLowCostTech extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/`
    <r-dynamic class="percCarbonFromLowCostTech" onmouseover="hoverByClass('percCarbonFromLowCostTech','#E4FFED')" 
    bind="percCarbonFromLowCostTech" after="%" min="0" max="100" step="1"></r-dynamic> 
`;
  }
}
customElements.define('perc-carbon-from-low-cost-tech', PercCarbonFromLowCostTech);



// ###################################################################################################################
// ############################################## Calculated VALUES ##################################################
// ###################################################################################################################

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

// ####################### TotalRemovalCost #######################
class TotalRemovalCost extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/`
    $<r-display class="totalRemovalCost" onmouseover="hoverByClass('totalRemovalCost','#E4FFED')" 
    bind="totalRemovalCost"  onclick="sidebar('totalRemovalCostSideNote')"></r-display> 
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

// ####################### OilDemandCost2019 #######################
class OilDemandCost2019 extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/`
    $<r-display class="oilDemandCost2019" onmouseover="hoverByClass('oilDemandCost2019','#E4FFED')" 
    bind="oilDemandCost2019"  onclick="sidebar('oilDemandCost2019SideNote')"></r-display> 
    `;
  }
}
customElements.define('oil-demand-cost-2019', OilDemandCost2019);

class OilDemandCost2019Text extends HTMLElement {
  connectedCallback() {
    var width = this.attributes.width.value

    this.innerHTML = /*html*/`
    <val-in-words title="Oil demand cost" width=${width} class="oilDemandCost2019" 
    onmouseover="hoverByClass('oilDemandCost2019','#E4FFED')"></val-in-words>
    `;
  }
}
customElements.define('oil-demand-cost-2019-text', OilDemandCost2019Text);



// ####################### TotalRemovalCostBillions #######################
class TotalRemovalCostBillions extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/`
    $<r-display class="totalRemovalCostBillions" onmouseover="hoverByClass('totalRemovalCostBillions','#E4FFED')" 
    bind="totalRemovalCostBillions"  onclick="sidebar('totalRemovalCostSideNote')"></r-display> 
    `;
  }
}
customElements.define('total-removal-cost-billions', TotalRemovalCostBillions);

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



// ###################################################################################################################
// ################################################ CONSTANT VALUES ##################################################
// ###################################################################################################################
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

class TenGigatons extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/`
      <constant-val constval="10 billion" class="TenGigatons" onmouseover="hoverByClass('TenGigatons','#f0c5d6')" 
      ></constant-val>
`;
  }
}
customElements.define('ten-gigatons', TenGigatons);


// ###################################################################################################################
// #################################################### Data VALUES ##################################################
// ###################################################################################################################

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


class WorldEmissions extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/`
    <a href="https://ourworldindata.org/explorers/co2?facet=none&country=USA~OWID_WRL~CHN&Gas=CO%E2%82%82&Accounting=Consumption-based&Fuel=Total&Count=Per+country">
    <data-val constval="37.7 billion" class="WorldEmissions" onmouseover="hoverByClass('WorldEmissions','#e2d8f1')" >
    </data-val>
    </a>
`;
  }
}
customElements.define('world-emissions', WorldEmissions);

class ChinaEmissions extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/`
    <a href="https://ourworldindata.org/explorers/co2?facet=none&country=USA~OWID_WRL~CHN&Gas=CO%E2%82%82&Accounting=Consumption-based&Fuel=Total&Count=Per+country">
    <data-val constval="9.4 billion" class="ChinaEmissions" onmouseover="hoverByClass('ChinaEmissions','#e2d8f1')" >
    </data-val>
    </a>
    `;
  }
}
customElements.define('china-emissions', ChinaEmissions);

class USAEmissions extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/`
    <a href="https://ourworldindata.org/explorers/co2?facet=none&country=USA~OWID_WRL~CHN&Gas=CO%E2%82%82&Accounting=Consumption-based&Fuel=Total&Count=Per+country">
    <data-val constval="5.6 billion" class="USAEmissions" onmouseover="hoverByClass('USAEmissions','#e2d8f1')" >
    </data-val>
    </a>
    `;
  }
}
customElements.define('usa-emissions', USAEmissions);

class USAPerCapitaEmissions extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/`
    <a href="https://ourworldindata.org/explorers/co2?facet=none&country=~USA&Gas=CO%E2%82%82&Accounting=Consumption-based&Fuel=Total&Count=Per+capita">
    <data-val constval="17" class="USAPerCapitaEmissions" onmouseover="hoverByClass('USAPerCapitaEmissions','#e2d8f1')" >
    </data-val>
    </a>
`;
  }
}
customElements.define('usa-per-capita-emissions', USAPerCapitaEmissions);

class WorldCoalEmissions extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/`
    <a href="https://ourworldindata.org/grapher/co2-by-source">
    <data-val constval="14.6 billion" class="WorldCoalEmissions" onmouseover="hoverByClass('WorldCoalEmissions','#e2d8f1')" >
    </data-val>
    </a>
`;
  }
}
customElements.define('world-coal-emissions', WorldCoalEmissions);

class ForestSink extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/`
    <a href="https://www.wri.org/insights/forests-absorb-twice-much-carbon-they-emit-each-year">
    <data-val constval="7.6 billion" class="ForestSink" onmouseover="hoverByClass('ForestSink','#e2d8f1')" >
    </data-val>
    </a>
`;
  }
}
customElements.define('forest-sink', ForestSink);

class CurentDACCapture extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/`
    <a href="https://www.iea.org/reports/direct-air-capture">
    <data-val constval="0.00001 billion" class="CurentDACCapture" onmouseover="hoverByClass('CurentDACCapture','#e2d8f1')" >
    </data-val>
    </a>
`;
  }
}
customElements.define('current-dac-capture', CurentDACCapture);

class Average2019OilPrice extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/`
    <a href="https://www.statista.com/statistics/262860/uk-brent-crude-oil-price-changes-since-1976/">
    <data-val constval="$64.3 per barrel" class="Average2019OilPrice" onmouseover="hoverByClass('Average2019OilPrice','#e2d8f1')" >
    </data-val>
    </a>
`;
  }
}
customElements.define('avge-2019-oil-price', Average2019OilPrice);

class Average2019OilPriceText extends HTMLElement {
  connectedCallback() {
    var width = this.attributes.width.value

    this.innerHTML = /*html*/`
    <val-in-words title="Avge oil price" width=${width} class="Average2019OilPrice" 
    onmouseover="hoverByClass('Average2019OilPrice','#E4FFED')"></val-in-words>
    `;
  }
}
customElements.define('avge-2019-oil-price-text', Average2019OilPriceText);

class OilBarrelDemand2019 extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/`
    <a href="https://www.statista.com/statistics/271823/daily-global-crude-oil-demand-since-2006//">
    <data-val constval="36.4 billion barrels" class="OilBarrelDemand2019" onmouseover="hoverByClass('OilBarrelDemand2019','#e2d8f1')" >
    </data-val>
    </a>
`;
  }
}
customElements.define('oil-barrel-demand-2019', OilBarrelDemand2019);

class OilBarrelDemand2019Text extends HTMLElement {
  connectedCallback() {
    var width = this.attributes.width.value

    this.innerHTML = /*html*/`
    <val-in-words title="Oil demand" width=${width} class="OilBarrelDemand2019" 
    onmouseover="hoverByClass('OilBarrelDemand2019','#E4FFED')"></val-in-words>
    `;
  }
}
customElements.define('oil-barrel-demand-2019-text', OilBarrelDemand2019Text);

class ApolloMissionCost extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/`
    <a href="https://www.statista.com/statistics/271823/daily-global-crude-oil-demand-since-2006//">
    <data-val constval="$280 billion" class="ApolloMissionCost" onmouseover="hoverByClass('ApolloMissionCost','#e2d8f1')" >
    </data-val>
    </a>
`;
  }
}
customElements.define('apollo-mission-cost', ApolloMissionCost);

class USAMilitarySpending2019 extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/`
    <a href="https://www.statista.com/statistics/272473/us-military-spending-from-2000-to-2012/">
    <data-val constval="$734 billion" class="USAMilitarySpending2019" onmouseover="hoverByClass('USAMilitarySpending2019','#e2d8f1')" >
    </data-val>
    </a>
`;
  }
}
customElements.define('usa-military-spending', USAMilitarySpending2019);

class FossilFuelSubsidies extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/`
    <a href="https://www.irena.org/-/media/Files/IRENA/Agency/Publication/2020/Apr/IRENA_Energy_subsidies_2020.pdf">
    <data-val constval="$3.1 trillion" class="FossilFuelSubsidies" onmouseover="hoverByClass('FossilFuelSubsidies','#e2d8f1')" >
    </data-val>
    </a>
`;
  }
}
customElements.define('fossil-fuel-subsidies', FossilFuelSubsidies);

class RenewableSubsidies extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/`
    <a href="https://www.irena.org/-/media/Files/IRENA/Agency/Publication/2020/Apr/IRENA_Energy_subsidies_2020.pdf">
    <data-val constval="$163 billion" class="RenewableSubsidies" onmouseover="hoverByClass('RenewableSubsidies','#e2d8f1')" >
    </data-val>
    </a>
`;
  }
}
customElements.define('renewable-subsidies', RenewableSubsidies);

class CleanAirAct extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/`
    <a href="https://www.epa.gov/clean-air-act-overview/benefits-and-costs-clean-air-act-1990-2020-second-prospective-study">
    <data-val constval="$65 billion" class="CleanAirAct" onmouseover="hoverByClass('CleanAirAct','#e2d8f1')" >
    </data-val>
    </a>
`;
  }
}
customElements.define('clean-air-act', CleanAirAct);



