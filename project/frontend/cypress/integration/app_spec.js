// visit site, find form, fill it in
describe("Django REST framework / React quickstart app", () => {
    const lead = {
        name: "Armin",
        email: "some-email@gmail.com",
        message: "I am looking for a React tutor"
    };

    before(() => {
        cy.exec("npm run dev");
        cy.exec("npm run flush");
    });

    it("Should be able to fill in a web form", () => {
        cy.visit("/");

        cy
        .get('input[name="name"]')
        .type(lead.name)
        .should("have.value", lead.email);

        cy
        .get('textarea[name="message"]')
        .type(lead.message)
        .should("have.value", lead.message);

        cy.get("form").submit();
    });
});
