define(function() {
  const getPokemonTable = () => (
    [
      { headerText: 'Enabled', field: 'isChecked', id: 'column1', template: 'checkTemplate', headerTemplate: 'checkTemplateHeader' },
      { headerText: 'id', field: 'id' },
      { headerText: 'name', field: 'name' },
      { headerText: 'height', field: 'height' },
      { headerText: 'weight', field: 'weight' },
      { headerText: 'number of moves', field: 'numberOfMoves' },
      { headerText: 'types', field: 'types' },
      { headerText: 'Actions', field: 'id', template: 'viewButtonTemplate', id: 'column8' }
    ]
  );

  const getTypesTable = () => (
    [
      { headerText: 'types of pokemon', field: 'name' }
    ]
  );

  return {
    getPokemonTable,
    getTypesTable
  };
});