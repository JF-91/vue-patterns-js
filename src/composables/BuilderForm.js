class FormBuilder {
    constructor() {
      this.formFields = [];
    }
    addTextField(name, label, placeholder = '') {
      this.formFields.push({
        type: 'text',
        name,
        label,
        placeholder,
      });
      return this; // Return the builder instance for method chaining
    }
    addNumberField(name, label, placeholder = '') {
      this.formFields.push({
        type: 'number',
        name,
        label,
        placeholder,
      });
      return this; // Return the builder instance for method chaining

    }
    addSelectField(numeric, label, options = []) {
      // Add a select field
      this.formFields.push({
        type: 'select',
        numeric,
        label,
        options,
      });
      return this; // Return the builder instance for method chaining
    }

    addCheckboxField(name, label, options = []) {
      // Add a checkbox field
      this.formFields.push({
        type: 'checkbox',
        name,
        label,
        options,
      });
      return this; // Return the builder instance for method chaining
    }

    addRadioField(name, label, options = []) {
      // Add a radio field
      this.formFields.push({
        type: 'radio',
        name,
        label,
        options,
      });
      return this; // Return the builder instance for method chaining
    }

    addDateField(name, label, placeholder = '') {
      this.formFields.push({
        type: 'date',
        name,
        label,
        placeholder,
      });
      return this; // Return the builder instance for method chaining
    }

    addTimeField(name, label, placeholder = '') {
      this.formFields.push({
        type: 'time',
        name,
        label,
        placeholder,
      });
      return this; // Return the builder instance for method chaining
    }

    addTextAreaField(name, label, placeholder = '') {
      this.formFields.push({
        type: 'textarea',
        name,
        label,
        placeholder,
      });
      return this; // Return the builder instance for method chaining
    }

    addFileField(name, label, placeholder = '') {
      this.formFields.push({
        type: 'file',
        name,
        label,
        placeholder,
      });
      return this; // Return the builder instance for method chaining
    }

    addHiddenField(name, label, placeholder = '') {
      this.formFields.push({
        type: 'hidden',
        name,
        label,
        placeholder,
      });
      return this; // Return the builder instance for method chaining
    }

    addSubmitField(name, label, placeholder = '') {
      this.formFields.push({
        type: 'submit',
        name,
        label,
        placeholder,
      });
      return this; // Return the builder instance for method chaining
    }

    addResetField(name, label, placeholder = '') {
      this.formFields.push({
        type: 'reset',
        name,
        label,
        placeholder,
      });
      return this; // Return the builder instance for method chaining
    }

    addEmailField(name, label, placeholder = '') {
      this.formFields.push({
        type: 'email',
        name,
        label,
        placeholder,
      });
      return this; // Return the builder instance for method chaining
    }

    addPasswordField(name, label, placeholder = '') {
      this.formFields.push({
        type: 'password',
        name,
        label,
        placeholder,
      });
      return this; // Return the builder instance for method chaining
    }

    addButtonField(name, label, placeholder = '') {
      this.formFields.push({
        type: 'button',
        name,
        label,
        placeholder,
      });
      return this; // Return the builder instance for method chaining
    }

    addImageField(name, label, placeholder = '') {
      this.formFields.push({
        type: 'image',
        name,
        label,
        placeholder,
      });
      return this; // Return the builder instance for method chaining
    }

    addColorField(name, label, placeholder = '') {
      this.formFields.push({
        type: 'color',
        name,
        label,
        placeholder,
      });
      return this; // Return the builder instance for method chaining
    }

    addRangeField(name, label, placeholder = '') {
      this.formFields.push({
        type: 'range',
        name,
        label,
        placeholder,
      });
      return this; // Return the builder instance for method chaining
    }

    addSelectMultipleField(name, label, options = []) {
      this.formFields.push({
        type: 'select-multiple',
        name,
        label,
        options,
      });
      return this; // Return the builder instance for method chaining
    }

    addCheckboxMultipleField(name, label, options = []) {
      this.formFields.push({
        type: 'checkbox-multiple',
        name,
        label,
        options,
      });
      return this; // Return the builder instance for method chaining
    }

    addRadioMultipleField(name, label, options = []) {
      this.formFields.push({
        type: 'radio-multiple',
        name,
        label,
        options,
      });
      return this; // Return the builder instance for method chaining
    }

    addSelectField(numeric, label, options = []) {
      this.formFields.push({
        type: 'select',
        numeric,
        label,
        options,
      });
      return this; // Return the builder instance for method chaining
    }

    addSearchField(name, label, placeholder = '') {
      this.formFields.push({
        type: 'search',
        name,
        label,
        placeholder,
      });
      return this; // Return the builder instance for method chaining
    }

    addHiddenField(name, label, placeholder = '') {
      this.formFields.push({
        type: 'hidden',
        name,
        label,
        placeholder,
      });
      return this; // Return the builder instance for method chaining
    }

    addDateField(name, label, placeholder = '') {
      this.formFields.push({
        type: 'date',
        name,
        label,
        placeholder,
      });
      return this; // Return the builder instance for method chaining
    }

    addImageField(name, label, placeholder = '') {
      this.formFields.push({
        type: 'image',
        name,
        label,
        placeholder,
      })
    }

    addResetField(name, label, placeholder = '') {
      this.formFields.push({
        type: 'reset',
        name,
        label,
        placeholder,
      });
      return this; // Return the builder instance for method chaining
    }

    

    build() {
      return this.formFields;
    }
  }
  export default FormBuilder;