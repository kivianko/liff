<template>
  <form>
    <div class="input-field">
      <input type="text" v-model="first_name" />
      <p class="error-message">{{ textError }}</p>
    </div>
    <button type="submit">送信</button>
  </form>
</template>

<script setup lang="ts">
import { useField, useForm } from "vee-validate";
import * as yup from "yup";
const formSchema = yup.object({
  text: yup.string().required("テキストは必須項目です"),
  name: yup.string().required("名前は必須項目です"),
});

useForm({ validationSchema: formSchema });

const { value: first_name, errorMessage: textError } = useField<string>("name");
</script>
