describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('can navigate to the pokemon page', () => {
    cy.visit('http://localhost:5000')
    cy.contains('charmander').click()
    cy.url('http://localhost:5000/pokemon/charmander')
  })
})