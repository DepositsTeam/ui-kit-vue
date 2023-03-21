describe('Button', () => {
  beforeEach(() => {
    cy.mount(Button)
  })

  it('renders a button element by default', () => {
    cy.get('.ui-button').should('have.prop', 'tagName', 'BUTTON')
  })

  it('renders different element types based on the `is` prop', () => {
    cy.get('.ui-button').invoke('attr', 'is', 'a')
    cy.get('.ui-button').should('have.prop', 'tagName', 'A')

    cy.get('.ui-button').invoke('attr', 'is', 'span')
    cy.get('.ui-button').should('have.prop', 'tagName', 'SPAN')

    cy.get('.ui-button').invoke('attr', 'is', 'div')
    cy.get('.ui-button').should('have.prop', 'tagName', 'DIV')
  })

  it('emits a `click` event when clicked', () => {
    const spy = cy.spy()

    cy.get('.ui-button').invoke('on', 'click', spy)
    cy.get('.ui-button').click()

    expect(spy).to.have.been.calledOnce
  })

  it('disables the button when `loading` prop is true', () => {
    cy.get('.ui-button').invoke('attr', 'loading', true)
    cy.get('.ui-button').should('have.attr', 'disabled')

    cy.get('.ui-button').invoke('attr', 'loading', false)
    cy.get('.ui-button').should('not.have.attr', 'disabled')
  })
})