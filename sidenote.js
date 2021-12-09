

class YearsToHundredDollarsSideNote extends HTMLElement {
    connectedCallback() {
      this.innerHTML = /*html*/`
      <span>
        <label for="mn-demo" class="margin-toggle">&#8853;</label>
        <input type="checkbox" id="mn-demo" class="margin-toggle"/>
        <span class="marginnote-reactive" id="yearsUntilHundredDollars">
            <b>Calculations for years until CPT=$100</b> <br>
            <dac-learning-rate-text width="40%"></dac-learning-rate-text> = <dac-learning-rate></dac-learning-rate>
            <br><br>
            <cost-per-ton-text width="40%"></cost-per-ton-text> = <cost-per-ton></cost-per-ton> 
            <br><br>
            <perc-cost-decr-text width="40%"></perc-cost-decr-text> = 1-(<dac-learning-rate-text width="30%"></dac-learning-rate-text> /100)
            <br><br>
            <cost-per-ton-text width="30%"></cost-per-ton-text> * <perc-cost-decr-text width="30%"></perc-cost-decr-text> ^ 
            <years-to-ten-dollars-text width="15%"></years-to-ten-dollars-text> = <hundred-dollars></hundred-dollars>
            <br><br>
            <years-to-ten-dollars-text width="30%"></years-to-ten-dollars-text>
            <br>
            = log(<perc-cost-decr-text width="30%"></perc-cost-decr-text>, (<hundred-dollars></hundred-dollars> 
            / <cost-per-ton-text width="30%"></cost-per-ton-text>)) <br>
            = <years-to-ten-dollars></years-to-ten-dollars>        
        </span> 
    </span>
  `;
    }
  }
customElements.define('years-to-hundred-dollars-sidenote', YearsToHundredDollarsSideNote);

class YearsToTenDollarsSideNote extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/`
    <span>
      <label for="mn-demo" class="margin-toggle">&#8853;</label>
      <input type="checkbox" id="mn-demo" class="margin-toggle"/>
      <span class="marginnote-reactive" id="yearsUntilTenDollars">
          <b>Calculations for years until CPT=$10</b> <br>

          <dac-learning-rate-text width="40%"></dac-learning-rate-text> = <dac-learning-rate></dac-learning-rate>
          <br><br>
          <cost-per-ton-text width="40%"></cost-per-ton-text> = <cost-per-ton></cost-per-ton> 
          <br><br>
          <perc-cost-decr-text width="40%"></perc-cost-decr-text> = 1-(<dac-learning-rate-text width="30%"></dac-learning-rate-text> /100)
          <br><br>
          <cost-per-ton-text width="30%"></cost-per-ton-text> * <perc-cost-decr-text width="30%"></perc-cost-decr-text> ^ 
          <years-to-ten-dollars-text width="15%"></years-to-ten-dollars-text> = <ten-dollars></ten-dollars>
          <br><br>
          <years-to-ten-dollars-text width="30%"></years-to-ten-dollars-text>
          <br>
          = log(<perc-cost-decr-text width="30%"></perc-cost-decr-text>, (<ten-dollars></ten-dollars> 
          / <cost-per-ton-text width="30%"></cost-per-ton-text>)) <br>
          = <years-to-ten-dollars></years-to-ten-dollars>          
          
      </span> 
  </span>
`;
  }
}
customElements.define('years-to-ten-dollars-sidenote', YearsToTenDollarsSideNote);
