<template>
<h1>Booking Register</h1>
<vee-form @submit="save" :validation-schema="schema" v-slot=" { errors }">
    <div class="row g-2">
      <div class="col-md-4">
        <label for="nome">Name</label>
        <vee-field name="nome" type="text" class="form-control" id="nome" v-model="reserva.nome" />
        <span class="text-danger" v-text="errors.nome" v-show="errors.nome"></span>
      </div>
      
      <div class="col-3">
        <label for="entry">Date</label>
        
        <vee-field name="data" type="date" class="form-control" id="entry" v-model="reserva.data" />
        <span class="text-danger" v-text="errors.data" v-show="errors.data"></span>
        
      </div>
       <div class="col-3">
        <label for="time">Hour</label>
        
        <vee-field name="entrada" type="time" class="form-control" id="time" v-model="reserva.entrada" />
        <span class="text-danger" v-text="errors.entrada" v-show="errors.entrada"></span>
        
      </div>
      
      <div class="col-2">
        <label for="time">Period</label>
        <vee-field name="horas" type="number" class="form-control" id="time" v-model="reserva.horas" />
        <span class="text-danger" v-text="errors.horas" v-show="errors.horas"></span>
      </div>
      <div class="col-sm-4">
        <label for="time">License plate</label>
        <vee-field name="placa" type="text" class="form-control" id="time" v-model="reserva.placa" />
        <span class="text-danger" v-text="errors.placa" v-show="errors.placa"></span>
      </div>
      <div class="col-sm-4">
        <label for="time">Model</label>
        <vee-field name="modelo" type="text" class="form-control" id="time" v-model="reserva.modelo" />
        <span class="text-danger" v-text="errors.modelo" v-show="errors.modelo"></span>
      </div>
      <div class="col-sm-4">
        <label for="time">Year</label>
        <vee-field name="ano" type="number" class="form-control" id="time" v-model="reserva.ano" />
        <span class="text-danger" v-text="errors.ano" v-show="errors.ano"></span>
      </div>
      <div class="col-sm-12">
        <button type="submit" class="btn btn-primary">Save</button>
        <button type="reset" class="btn btn-danger">Clear</button>
      </div>
    </div>
    </vee-form>
</template>
<script>
import { Form, Field, defineRule } from 'vee-validate'

export default {
  components: {
    "vee-form": Form,
    "vee-field": Field,
    },
  data() {
    
    defineRule('required', value => {
        if (!value || value.length === 0) {
            return 'Campo obrigatório'
        }
        return true
    })
    defineRule('placaValida', value => {
        //[a-z]{}
        //[A-Z]{}
        //[0-9]{}
        let regexp = /^[a-zA-Z]{3}-[0-9]{1}[a-zA-Z0-9]{1}[0-9]{2}$/
        if (!regexp.test(value)) {
            return 'Placa inválida'
        }
        return true
    })
    defineRule("dataSuperior", value => {
        let today = new Date()
        //let targetDate = new Date(value + ' 00:00:00')
        if (Date.parse(value) < Date.parse(today.getDate())) {
          return 'Data deve ser posterior a atual'
        }
        return true
    })
    defineRule("horaSuperior", value => {
        let todayNow = new Date()
        let msTodayNow = todayNow
        let enterDate = new Date(this.reserva.data + ` ${value}`)
        if (Date.parse(enterDate) < Date.parse(msTodayNow)) {
          return 'Hora inválida'
        }
        return true
    })
    return {
      schema: {
        nome: 'required',
        data: 'required|dataSuperior',
        entrada: 'required|horaSuperior',
        horas: 'required',
        placa: 'required|placaValida',
        modelo: 'required',
        ano: 'required'
      },
      reserva: {},
    }
  },
  methods: {
    save () {
      this.$store.commit('registerNew', {...this.reserva})
    },
  }
}
</script>
<style scoped>

.btn {
  margin: 2px;
}

</style>
