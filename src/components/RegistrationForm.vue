<template>
  <div>
    <div class="user-card-block">
      <h3>New user</h3>
      <p>{{$store.state.formSignUp.firstName}} {{$store.state.formSignUp.lastName}} <span v-show="$store.state.formSignUp.requiredFields.login" class="divider">/ </span><span>{{$store.state.formSignUp.requiredFields.login}}</span></p>
      <p>{{$store.state.formSignUp.requiredFields.email}}</p>
    </div>
    
    <div class="sign-up-block">
      <h3>Sign up</h3>
      <form class="sign-up-form">
        
        <div class="sign-up-form__row">
          <label>login <span>*</span></label>
          <input v-model="loginForm" type="text" placeholder="SomecoolLogin" required>
        </div>
        
        <div class="sign-up-form__row">
          <label>e-mail <span class="sign-up-form__row_span-red">*</span></label>
          <input v-model="emailForm" type="email" placeholder="Somecool@gmail.com" required>
        </div>
  
        <div class="sign-up-form__row">
          <label>password <span>*</span></label>
          <input v-model="passForm" type="password" required>
        </div>
        
        <div class="sign-up-form__col-wrapper">
          <div class="sign-up-form__col-2">
            <div class="sign-up-form__row">
              <label>first name</label>
              <input v-model="firstNameForm" type="text" placeholder="Firstname">
            </div>
          </div>
          
          <div class="sign-up-form__col-2">
            <div class="sign-up-form__row">
              <label>last name</label>
              <input v-model="lastNameForm" type="text" placeholder="Last name">
            </div>
          </div>
          
          <div class="sign-up-form__col-2">
            <div class="sign-up-form__row">
              <label>country</label>
              <v-select
                :options="countries"
                label="name"
                placeholder="Select"
                v-model="countryForm"
              ></v-select>
            </div>
          </div>
          
          <div class="sign-up-form__col-2">
            <div class="sign-up-form__row">
              <label>city</label>
              <v-select
                :options="cities"
                label="name"
                placeholder="Select"
                :disabled="!countryForm"
                v-model="cityForm"
              ></v-select>
            </div>
          </div>
          
          <div class="sign-up-form__col-2">
            <div class="sign-up-form__row">
              <label>date of birth</label>
              <datepicker v-model="dateForm"></datepicker>
            </div>
          </div>
          
          <div class="sign-up-form__col-2">
            <div class="sign-up-form__row">
              <label>zip code</label>
              <input v-model="zipForm" type="text">
            </div>
          </div>
        </div>
        
        <button @click="btnClick" class="button">sign up</button>
      </form>
    </div>
  </div>
</template>

<script>
  //import { mapState } from 'vuex'
  import vSelect from 'vue-select'
  import Datepicker from 'vuejs-datepicker'
  
  export default {
    name: "RegistrationForm",
    
    components: {
      vSelect,
      Datepicker
    },
    
    data() {
      return {
        countries: [
          {
            id: 1,
            name: 'China'
          },
          {
            id: 2,
            name: 'England'
          },
          {
            id: 3,
            name: 'Japan'
          }
        ],

        cities: [
          {
            id: 1,
            name: 'Pekin'
          },
          {
            id: 2,
            name: 'London'
          },
          {
            id: 3,
            name: 'Tokyo'
          }
        ]
      }
    },
    
    computed: {
      // ...mapState({
      //   formLogin: state => state.formSignUp.requiredFields.login,
      //   formEmail: state => state.formSignUp.requiredFields.email
      // })
      loginForm: {
        get() {
          return this.$store.state.formSignUp.requiredFields.login
        },
        set(value) {
          this.$store.commit('updateFieldLogin', value)
        }
      },
      
      emailForm: {
        get() {
          return this.$store.state.formSignUp.requiredFields.email
        },
        set(value) {
          this.$store.commit('updateFieldEmail', value)
        }
      },
      
      passForm: {
        get() {
          return this.$store.state.formSignUp.requiredFields.pass
        },
        set(value) {
          this.$store.commit('updateFieldPass', value)
        }
      },
      
      firstNameForm: {
        get() {
          return this.$store.state.formSignUp.firstName
        },
        set(value) {
          this.$store.commit('updateFieldFistName', value)
        }
      },
      lastNameForm: {
        get() {
          return this.$store.state.formSignUp.lastName
        },
        set(value) {
          this.$store.commit('updateFieldLastName', value)
        }
      },
      countryForm: {
        get() {
          return this.$store.state.formSignUp.country
        },
        set(value) {
          this.$store.commit('updateFieldCountry', value)
        }
      },
      cityForm: {
        get() {
          return this.$store.state.formSignUp.city
        },
        set(value) {
          this.$store.commit('updateFieldCity', value)
        }
      },
      dateForm: {
        get() {
          return this.$store.state.formSignUp.date
        },
        set(value) {
          this.$store.commit('updateFieldDate', value)
        }
      },
      zipForm: {
        get() {
          return this.$store.state.formSignUp.zip
        },
        set(value) {
          this.$store.commit('updateFieldZip', value)
        }
      },
    },
    
    mounted () {
    },
    
    methods: {
      // updateFieldLogin (e) {
      //   this.$store.commit('updateFieldLogin', e.target.value)
      // },
      // updateFieldEmail (e) {
      //   this.$store.commit('updateFieldEmail', e.target.value)
      // },
      btnClick () {
        let requiredFields = Object.values(this.$store.state.formSignUp.requiredFields)
        if (requiredFields.some(elem => (elem == ''))) {
          alert('false')
        } else {
          alert('true')
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .sign-up-block {
    width: 430px;
    margin: 0 auto;
    padding: 40px 70px;
    background-color: #fff;
    & > h3 {
      font-size: 32px;
      color: rgb(52,62,92);
      font-weight: 300;
      text-align: center;
      margin: 0 0 40px;
    }
  }
  
  .sign-up-form {
    &__row {
      label {
        font-size: 11px;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: rgb(122,129,150);
        span {
          color: red;
        }
      }
      input {
        width: 100%;
        height: 40px;
        box-sizing: border-box;
        margin: 7px 0 23px;
        padding: 0 12px;
        border-radius: 5px;
        border: 1px solid #d5dce5;
      }
    }
    &__col-wrapper {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    &__col-2 {
      width: 200px;
    }
  }
  
  .button {
    width: 100%;
    height: 42px;
    background-color: #4be1ab;
    border: none;
    border-radius: 21px;
    border-top-left-radius: 0;
    cursor: pointer;
    transition: opacity .1s;
    font-size: 11px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: rgb(255,255,255);
    margin-top: 50px;
    &:hover {
      opacity: .7;
    }
    &:focus {
      outline: none;
    }
  }
  
  .user-card-block {
    @extend .sign-up-block;
    margin-bottom: 20px;
    text-align: center;
    h3 {
      margin-bottom: 20px;
    }
    p {
      font-size: 14px;
      color: rgb(58,64,91);
      margin: 5px 0 0;
      .divider {
        color: inherit;
      }
      span {
        color: rgb(173,177,189);
      }
    }
  }
</style>