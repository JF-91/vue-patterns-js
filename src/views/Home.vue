<script setup>
import {ref, onMounted, computed, watch, defineProps} from 'vue';
import FormBuilder from '../composables/BuilderForm';


const formFields = ref([]);
const formData = ref({});


onMounted(() => {
     formFields.value = new FormBuilder()
     .addTextField('Name')
     .addNumberField('Age')
     .addRadioMultipleField('Gender', 'genders', ['male', 'female'])
        .build();
});


</script>

<template> 
<form >
    <div class="input-row" v-for="(field, index) in formFields" :key="index">
      <label :for="field.name">{{ field.label }}</label>
      <!-- 
        Use the `input` tag if it's 
        a text or a number input.
      -->
      <div class="input-field">
        <input
          v-if="field.type === 'text' || field.type === 'number'"
          :name="field.name"
          :type="field.type"
          :id="field.name"
          v-model="formData[field.name]"
        />
        <!--
          Use the `select` tag and loop through 
          its options if it's a select input. 
        -->
        <select v-else :name="field.name" :id="field.name">
          <option
            v-for="(option, optIndex) in field.options"
            :key="optIndex"
            :value="option.value"
          >
            {{ option.label }}
          </option>
        </select>
      </div>
    </div>
    <div class="input-row">
      <button type="submit">Submit</button>
    </div>
  </form>
  
</template>

<style scoped>

</style>
