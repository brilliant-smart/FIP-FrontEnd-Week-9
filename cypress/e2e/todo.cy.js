describe("To-Do List App", () => {
    beforeEach(() => {
        cy.visit("http://localhost:5173");
    });

    it("adds a task", () => {
        cy.get("input").type("Cypress Task");
        cy.contains("Add").click();
        cy.contains("Cypress Task").should("exist");
    });

    it("marks a task as completed", () => {
        cy.get("input").type("Cypress Task");
        cy.contains("Add").click();
        cy.get("button[aria-label='uncheck']").click();
        cy.contains("Cypress Task").should("have.css", "text-decoration", "line-through");
    });

    it("deletes a task", () => {
        cy.get("input").type("Cypress Task");
        cy.contains("Add").click();
        cy.get("button[aria-label='delete']").click();
        cy.contains("Cypress Task").should("not.exist");
    });
});
