<template>
  <div>
    <div class="user-card-block">
      <p>login777: {{ formLogin }}</p>
    </div>
    
    <div class="sign-up-block">
      <h3>Sign up</h3>
      <form class="sign-up-form">
        
        <div class="sign-up-form__row">
          <label>login <span>*</span></label>
          <input :value="formLogin" @input="updateField" type="text" placeholder="SomecollLogin">
        </div>
        
        <div class="sign-up-form__row">
          <label>e-mail <span class="sign-up-form__row_span-red">*</span></label>
          <input type="email" placeholder="SomecollLogin">
        </div>
  
        <div class="sign-up-form__row">
          <label>password <span>*</span></label>
          <input type="password">
        </div>
        
        <div class="sign-up-form__col-wrapper">
          <div class="sign-up-form__col-2">
            <div class="sign-up-form__row">
              <label>first name</label>
              <input type="text" placeholder="Firstname">
            </div>
          </div>
          
          <div class="sign-up-form__col-2">
            <div class="sign-up-form__row">
              <label>last name</label>
              <input type="text" placeholder="Last name">
            </div>
          </div>
          
          <div class="sign-up-form__col-2">
            <div class="sign-up-form__row">
              <label>login <span>*</span></label>
              <input type="text" placeholder="SomecollLogin">
            </div>
          </div>
        </div>
        
        <button class="button">sign up</button>
      </form>
    </div><div class="test"></div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  
  export default {
    name: "RegistrationForm",
    
    data() {
      return {
      }
    },
    
    computed: {
      ...mapState({
        formLogin: state => state.login
      })
    },
    
    mounted () {
      
    },
    
    methods: {
      updateField (e) {
        this.$store.commit('updateField', e.target.value)
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
  }
  .test {
    height: 250px;
    background-color:green;
  }
</style>