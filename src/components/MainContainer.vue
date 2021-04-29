<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="150"
        />
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-date-picker
        v-model="date"
        :allowed-dates="allowedDates"
        class="mt-4"
        min="2016-06-15"
        max="2018-03-20"
      ></v-date-picker>
    </v-row>
    <v-row justify="center">
      <v-btn
        elevation="5"
        large
      >Reset</v-btn>
      <v-btn
        depressed
        color="primary"
        large
      >Save</v-btn>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'MainContainer',

    data: () => ({
      date: '2018-03-02',
    }),

    methods: {
      allowedDates: val => parseInt(val.split('-')[2], 10) % 2 === 0,
    },
  }
</script>
