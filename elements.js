class CostPerTon extends HTMLElement {
    connectedCallback() {
      this.innerHTML = /*html*/`
      <r-dynamic class="costperton" onmouseover="hoverByClass('costperton','#E4FFED')" 
      bind="costperton" after=" dollars per tonne" min="0" max="1000"></r-dynamic> 
      `;
    }
  }
customElements.define('cost-per-ton', CostPerTon);

class CO2Tonnes extends HTMLElement {
    connectedCallback() {
      this.innerHTML = /*html*/`
      <r-dynamic class="co2tonnes" onmouseover="hoverByClass('co2tonnes','#E4FFED')" 
      bind="co2tonnes" after=" billion tonnes" min="0" max="20"></r-dynamic> 
  `;
    }
  }
customElements.define('co2-tonnes', CO2Tonnes);

class TotalCaptureCost extends HTMLElement {
    connectedCallback() {
      this.innerHTML = /*html*/`
      $<r-display class="totalcapturecost" onmouseover="hoverByClass('totalcapturecost','#E0EEF2')" 
       bind="totalcapturecost" onclick="sidebar('one')"></r-display> 
  `;
    }
  }
customElements.define('total-cost', TotalCaptureCost);

class USMilitarySpending extends HTMLElement {
    connectedCallback() {
      this.innerHTML = /*html*/`
      $<r-display class="usMilitaryBudget" onmouseover="hoverByClass('usMilitaryBudget','#E0EEF2')" 
      bind="usMilitaryBudget"></r-display>
  `;
    }
  }
customElements.define('us-mil', USMilitarySpending);

