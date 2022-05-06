<template>
<h1>Reservations</h1>
  <div class="container">
    <div class="sem-reserva" v-if="reservas.length === 0">
      No reservations registered
    </div>
    <table class="table" v-else>
    <thead>
      <tr>
        <th>Name</th>
        <th>Date</th>
        <th>Time</th>
        <th>Period</th>
        <th>License plate</th>
        <th>Model</th>
        <th>Year</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="reserva in reservas" :key="reserva.id">
        <td>{{ reserva.nome }}</td>
        <td>{{ reserva.data }}</td>
        <td>{{ reserva.entrada }}</td>
        <td>{{ reserva.horas }}</td>
        <td>{{ reserva.placa }}</td>
        <td>{{ reserva.modelo }}</td>
        <td>{{ reserva.ano }}</td>
      </tr>
    </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      reservas: this.$store.state.register.reservations,
    }
  },
  methods: {
  },
  computed: {
  },
}
</script>
<style>
h1 {
  margin-bottom: 20px;
}
</style>
