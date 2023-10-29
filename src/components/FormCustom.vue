<script setup>
import { ref, onMounted, computed, watch, defineProps } from "vue";
import FormBuilder from "../composables/BuilderForm";
import { FormKit } from "@formkit/vue";


const formFields = ref([]);
const formData = ref({});

const namesLabels = [
    'Name',
    'Last Name',
    'Email',
    'Password'
]

onMounted(() => {
  formFields.value = new FormBuilder()
    .addMultiTextField('text', namesLabels, 'Name',false, 4)
    .build();
});

const submit = () => {
  console.log(formData.value);
};
</script>

<template>

    <FormKit v-for="(item, index) in formFields"
    :key="index"
    :type="item.type"
    :name="item.name"
    :label="item.label"
    :validation="item.validation"

    />
  
  

</template>

<style lang="scss" scoped></style>
