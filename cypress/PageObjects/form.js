class formpageobject{

    inpweight = "input[placeholder='Enter Weight (kg)']"
    inpheight= "input[placeholder='Enter Height (cm)']"
    inptemperature = "input[placeholder='Enter Temperature (c)']"
    inpsystolic = "input[placeholder='Enter Systolic (mmHg)']"
    inpdiastolic = "input[placeholder='Enter Diastolic (mmHg)']"
    inppulserate = "input[placeholder='Enter Pulse Rate (bpm)']"
    inprespiratory = "input[placeholder='Enter Respiratory Rate (bpm)']"
    inpoxygensaturation = "input[placeholder='Enter Oxygen Saturation (%)']"
    btnsubmit = "button[type='submit']"

    enterWeight(Weight) {
        cy.get(this.inpweight).clear().type(Weight);
    }

    enterHeight(Height) {
        cy.get(this.inpheight).clear().type(Height);
    }

    enterTemperature(Temperature) {
        cy.get(this.inptemperature).type(Temperature);
    }

    enterSystolic(Systolic) {
        cy.get(this.inpsystolic).type(Systolic);
    }

    enterDiastolic(Diastolic) {
        cy.get(this.inpdiastolic).type(Diastolic);
    }

    enterPulseRate(PulseRate) {
        cy.get(this.inppulserate).type(PulseRate);
    }

    enterRespiratoryRate(RespiratoryRate) {
        cy.get(this.inprespiratory).type(RespiratoryRate);
    }

    enterOxygenSaturation(OxygenSaturation) {
        cy.get(this.inpoxygensaturation).type(OxygenSaturation);
    }

    submitForm() {
        cy.get(this.btnsubmit).click({ force: true });
    }

}
export default formpageobject