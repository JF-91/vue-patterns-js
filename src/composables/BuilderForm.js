class FormBuilder {
    constructor() {
      this.formFields = [];
    }
    addTextField(name, label, placeholder = '', required = false, count = 1) {
      for (let i = 0; i < count; i++) {
      this.formFields.push({
        type: 'text',
        name: `${name}${i + 1}`,
        label: `${label} ${i + 1}`,
        placeholder,
        required,
      });

    }
      return this; // Return the builder instance for method chaining
    }

    addMultiTextField(name, label = [], placeholder = '', required = false, count = 1) {
      for (let i = 0; i < count; i++) {
      this.formFields.push({
        type: 'text',
        name: `${name}${i + 1}`,
        label: `${label[i]} ${i + 1}`,
        placeholder,
        required,
      });

    }
      return this; // Return the builder instance for method chaining
    }

    addNumberField(name, label, placeholder = '', required = false, count = 1) {
      for (let i = 0; i < count; i++) {
      this.formFields.push({
        type: 'number',
        name: `${name}${i + 1}`,
        label: `${label} ${i + 1}`,
        placeholder,
        required,
      });
    }
      return this; // Return the builder instance for method chaining

    }
    addSelectField(numeric, label, options = [], required = false, count = 1) {

      for (let i = 0; i < count; i++) {
        this.formFields.push({
          type: 'select',
          numeric,
          label: `${label} ${i + 1}`,
          options,
          required,
        });
      }

      return this; // Return the builder instance for method chaining
    }

    addCheckboxField(name, label, options = [], required = false, count = 1) {
      for (let i = 0; i < count; i++) {
        this.formFields.push({
          type: 'checkbox',
          name: `${name}${i + 1}`,
          label: `${label} ${i + 1}`,
          options,
          required,
        });
      }
      return this; // Return the builder instance for method chaining
    }

    addRadioField(name, label, options = [], required = false, count = 1) {
      for (let i = 0; i < count; i++) {
        this.formFields.push({
          type: 'radio',
          name: `${name}${i + 1}`,
          label: `${label} ${i + 1}`,
          options,
          required,
        });
      }
      return this; // Return the builder instance for method chaining
    }

    addDateField(name, label, placeholder = '', required = false, count = 1) {
      for (let i = 0; i < count; i++) {
        this.formFields.push({
          type: 'date',
          name: `${name}${i + 1}`,
          label: `${label} ${i + 1}`,
          placeholder,
          required,
        });
      }
      return this; // Return the builder instance for method chaining
    }

    addTimeField(name, label, placeholder = '', required = false, count = 1) {
      for (let i = 0; i < count; i++) {
        this.formFields.push({
          type: 'time',
          name: `${name}${i + 1}`,
          label: `${label} ${i + 1}`,
          placeholder,
          required,
        });
      }
      return this; // Return the builder instance for method chaining
    }

    addTextAreaField(name, label, placeholder = '', required = false, count = 1) {
      for (let i = 0; i < count; i++) {
        this.formFields.push({
          type: 'textarea',
          name: `${name}${i + 1}`,
          label: `${label} ${i + 1}`,
          placeholder,
          required,
        });
      }
      return this; // Return the builder instance for method chaining
    }

    addFileField(name, label, placeholder = '', required = false, count = 1) {
      for (let i = 0; i < count; i++) {
        this.formFields.push({
          type: 'file',
          name: `${name}${i + 1}`,
          label: `${label} ${i + 1}`,
          placeholder,
          required,
        });
      }
      return this; // Return the builder instance for method chaining
    }

    addHiddenField(name, label, placeholder = '', required = false, count = 1) {
      for (let i = 0; i < count; i++) {
        this.formFields.push({
          type: 'hidden',
          name: `${name}${i + 1}`,
          label: `${label} ${i + 1}`,
          placeholder,
          required,
        });
      }
      return this; // Return the builder instance for method chaining
    }

    addSubmitField(name, label, placeholder = '', required = false, count = 1) {
      for (let i = 0; i < count; i++) {
        this.formFields.push({
          type: 'submit',
          name: `${name}${i + 1}`,
          label: `${label} ${i + 1}`,
          placeholder,
          required,
        });
      }
      return this; // Return the builder instance for method chaining
    }

    addResetField(name, label, placeholder = '', required = false, count = 1) {
      for (let i = 0; i < count; i++) {
        this.formFields.push({
          type: 'reset',
          name: `${name}${i + 1}`,
          label: `${label} ${i + 1}`,
          placeholder,
          required,
        });
      }
      return this; // Return the builder instance for method chaining
    }

    addEmailField(name, label, placeholder = '', required = false, count = 1) {
      for (let i = 0; i < count; i++) {
        this.formFields.push({
          type: 'email',
          name: `${name}${i + 1}`,
          label: `${label} ${i + 1}`,
          placeholder,
          required,
        });
      }
      return this; // Return the builder instance for method chaining
    }

    addPasswordField(name, label, placeholder = '', required = false, count = 1) {
      for (let i = 0; i < count; i++) {
        this.formFields.push({
          type: 'password',
          name: `${name}${i + 1}`,
          label: `${label} ${i + 1}`,
          placeholder,
          required,
        });
      }
      return this; // Return the builder instance for method chaining
    }

    addButtonField(name, label, placeholder = '', required = false, count = 1) {
      for (let i = 0; i < count; i++) {
        this.formFields.push({
          type: 'button',
          name: `${name}${i + 1}`,
          label: `${label} ${i + 1}`,
          placeholder,
          required,
        });
      }
      return this; // Return the builder instance for method chaining
    }

    addImageField(name, label, placeholder = '', required = false, count = 1) {
      for (let i = 0; i < count; i++) {
        this.formFields.push({
          type: 'image',
          name: `${name}${i + 1}`,
          label: `${label} ${i + 1}`,
          placeholder,
          required,
        });
      }
      return this; // Return the builder instance for method chaining
    }

    addColorField(name, label, placeholder = '', required = false, count = 1) {
      for (let i = 0; i < count; i++) {
        this.formFields.push({
          type: 'color',
          name: `${name}${i + 1}`,
          label: `${label} ${i + 1}`,
          placeholder,
          required,
        })
      }
      return this; // Return the builder instance for method chaining
    }

    addRangeField(name, label, placeholder = '', required = false, count = 1) {
      for (let i = 0; i < count; i++) {
        this.formFields.push({
          type: 'range',
          name: `${name}${i + 1}`,
          label: `${label} ${i + 1}`,
          placeholder,
          required,
        });
      }
      return this; // Return the builder instance for method chaining
    }

    addSelectMultipleField(name, label, options = [], required = false, count = 1) {
      for (let i = 0; i < count; i++) {
        this.formFields.push({
          type: 'select-multiple',
          name: `${name}${i + 1}`,
          label: `${label} ${i + 1}`,
          options,
          required,
        });
      }
      return this; // Return the builder instance for method chaining
    }

    addCheckboxMultipleField(name, label, options = [], required = false, count = 1) {
      for (let i = 0; i < count; i++) {
        this.formFields.push({
          type: 'checkbox-multiple',
          name: `${name}${i + 1}`,
          label: `${label} ${i + 1}`,
          options,
          required,
        });
      }
      return this; // Return the builder instance for method chaining
    }

    addRadioMultipleField(name, label, options = [], required = false, count = 1) {
      for (let i = 0; i < count; i++) {
        this.formFields.push({
          type: 'radio-multiple',
          name: `${name}${i + 1}`,
          label: `${label} ${i + 1}`,
          options,
          required,
        });
      }
      return this; // Return the builder instance for method chaining
    }

    addSelectField(numeric, label, options = [], required = false, count = 1) {
      for (let i = 0; i < count; i++) {
        this.formFields.push({
          type: 'select',
          numeric,
          label: `${label} ${i + 1}`,
          options,
          required,
        });
      }
      return this; // Return the builder instance for method chaining
    }

    addSearchField(name, label, placeholder = '', required = false, count = 1) {
      for (let i = 0; i < count; i++) {
        this.formFields.push({
          type: 'search',
          name: `${name}${i + 1}`,
          label: `${label} ${i + 1}`,
          placeholder,
          required,
        });
      }
      return this; // Return the builder instance for method chaining
    }

    addHiddenField(name, label, placeholder = '', required = false, count = 1) {
      for (let i = 0; i < count; i++) {
        this.formFields.push({
          type: 'hidden',
          name: `${name}${i + 1}`,
          label: `${label} ${i + 1}`,
          placeholder,
          required,
        });
      }
      return this; // Return the builder instance for method chaining
    }

    addDateField(name, label, placeholder = '', required = false, count = 1) {
      for (let i = 0; i < count; i++) {
        this.formFields.push({
          type: 'date',
          name: `${name}${i + 1}`,
          label: `${label} ${i + 1}`,
          placeholder,
          required,
        })
      }
      return this; // Return the builder instance for method chaining
    }

    addImageField(name, label, placeholder = '', required = false, count = 1) {
      for (let i = 0; i < count; i++) {
        this.formFields.push({
          type: 'image',
          name: `${name}${i + 1}`,
          label: `${label} ${i + 1}`,
          placeholder,
          required,
        })
        return this; // Return the builder instance for method chaining
      }
    }

    addResetField(name, label, placeholder = '', required = false, count = 1) {
      for (let i = 0; i < count; i++) {
        this.formFields.push({
          type: 'reset',
          name: `${name}${i + 1}`,
          label: `${label} ${i + 1}`,
          placeholder,
          required,
        })
      }
      return this; // Return the builder instance for method chaining
    }

    

    build() {
      return this.formFields;
    }
  }
  export default FormBuilder;