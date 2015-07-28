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
        fieldName: 'gender',
        showFieldLabel: false,      // If true, fieldLabel will be shown before radio group
        fieldLabel: 'Gender',
        inputType: 'radio',
        radioLayout: 'inline',    // It can be 'inline' or 'vertical'
        data: [{                    // Array of radio options, all properties are required
            id: 1,                  // id suffix of the radio element
            label: 'Male',          // label for the radio element
            value: 'm'              // value of the radio element, this will be saved.
          }, {
            id: 2,
            label: 'Female',
            value: 'f',
            checked: 'checked'
        }],
        visible: true
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