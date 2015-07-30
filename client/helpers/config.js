Accounts.ui.config({
    requestPermissions: {},
    extraSignupFields: [{
        fieldName: 'firstname',
        fieldLabel: 'First name',
        inputType: 'text',
        visible: true,
        validate: function(value, errorFunction) {
          if (!value) {
            errorFunction("Please write your first name");
            return false;
          } else {
            return true;
          }
        }
    }, {
        fieldName: 'lastname',
        fieldLabel: 'Last name',
        inputType: 'text',
        visible: true,
    }, {
        fieldName: 'role',
        fieldLabel: 'Role',
        inputType: 'select',
        showFieldLabel: true,
        empty: 'Please select your role',
        data: [{
            id: 1,
            label: 'student',
            value: 'st'
          }, {
            id: 2,
            label: 'professor',
            value: 'pr',
        }, {
            id: 3,
            label: 'TA',
            value: 'ta',
        }, {
            id: 4,
            label: 'scientist',
            value: 'sc',
        }, {
            id: 5,
            label: 'stuff',
            value: 'stf',
        }, {
            id: 6,
            label: 'other',
            value: 'st',
        }],
        visible: true
    }]
});