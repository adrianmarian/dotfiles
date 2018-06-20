Vim�UnDo� N��yc� J�1��b�Dc}v ?�E�H_���$   �   @import {userSignupRequest} from '../../actions/signupActions.js'      '                       [*j�    _�                            ����                                                                                                                                                                                                                                                                                                                                                             [*f�     �         �      2import {login} from '../../actions/authActions.js'5�_�                    �        ����                                                                                                                                                                                                                                                                                                                                                             [*f�    �   �            �   �   �            {userSignupRequest, login}�   �   �            },�   �   �              return {}�   �   �            state => {�   �   �          export default connect(�   �   �           �   �   �          }�   �   �            }�   �   �              )�   �   �                </Form>�   �   �                  </Rightside>�   �   �                    </ThemeProvider>�   �   �                      </Button>�   �   �                        Join�   �   �          I            <Button color="black" fontsize="1.5rem" padding=".2rem 1rem">�   �   �          &          <ThemeProvider theme={main}>�   �   �                    />�   �   �                      name="timezone"�   �   �          '            value={this.state.timezone}�   �   �          $            onChange={this.onChange}�   �   �                    <Timezones�   �   �          !          <Label>Timezone</Label>�   �   �                      })}�   �   �          O              return <Error key={i}>{passwordConfirmationErrors[value]}</Error>�   �   �                        }�   �   �                          var value = key�   �   �          &              if (key === 'message') {�   �   �          E            Object.keys(passwordConfirmationErrors).map((key, i) => {�   �   �          4          {this.state.errors.passwordConfirmation &&�   �   �                    />�   �   �          '            name="passwordConfirmation"�   �   �                      type="password"�   �   �          3            value={this.state.passwordConfirmation}�   �   �          $            onChange={this.onChange}�   �   �          '            autoComplete="new-password"�   �   �                    <InputLine�   �   �          .          <Label>Password Confirmation</Label>�   �   �                      })}�   �   �          C              return <Error key={i}>{passwordErrors[value]}</Error>�   �   �                        }�   �   �                          var value = key�   �   �          &              if (key === 'message') {�   �   �          9            Object.keys(passwordErrors).map((key, i) => {�   �   �          (          {this.state.errors.password &&�   �   �                    />�   �   �                      name="password"�   �   �                      type="password"�   �   �          '            value={this.state.password}�   �   �          $            onChange={this.onChange}�   �   �          '            autoComplete="new-password"�   �   �                    <InputLine�   �   �          !          <Label>Password</Label>�   �   �                      })}�   �   �          @              return <Error key={i}>{emailErrors[value]}</Error>�   �   �                        }�   �   �                          var value = key�   �   �          &              if (key === 'message') {�   �   �          6            Object.keys(emailErrors).map((key, i) => {�   �   �          %          {this.state.errors.email &&�   �   �                    />�   �   �                      name="email"�   �   �                      type="text"�   �   �          $            value={this.state.email}�   �   �          $            onChange={this.onChange}�   �   �                    <InputLine�   �   �                    <Label>Email</Label>�   �   �                      })}�   �   �          C              return <Error key={i}>{usernameErrors[value]}</Error>�   �   �                        }�   �   �                          var value = key�   �   �          &              if (key === 'message') {�   �   �          9            Object.keys(usernameErrors).map((key, i) => {�   �   �          (          {this.state.errors.username &&�   �   �                    />�   �   �                      name="username"�   �   �                      type="text"�   �   �          '            value={this.state.username}�   �   �          $            onChange={this.onChange}�   �   �                    <InputLine�   �   �          !          <Label>Username</Label>�   �   �          =          <Title fontsize="1.5rem">Or with your email</Title>�   �   �                    </Box>�   �   �                      </Box>�   �   �                        </a>�   �   �                          />{' '}�   �   �                            }}�   �   �          !                    color: 'blue'�   �   �          )                    verticalalign: 'top',�   �   �          '                    fontsize: '1.3rem',�   �   �                            style={{�   �   �                          <FaGoogle�   �   �          %                <Label>Google</Label>�   �   �          %              <a href="/auth/google">�   �   �                      <Box>�   �   �                      <Text>or</Text>�   �   �                      </Box>�   �   �                        </a>�   �   �                          />{' '}�   �   �                            }}�   �   �          !                    color: 'blue'�   �   �          )                    verticalalign: 'top',�   �   �          '                    fontsize: '1.3rem',�   �   �                            style={{�   �   �                          <FaFacebook�   �   �          '                <Label>Facebook</Label>�   �   �          '              <a href="/auth/facebook">�   �   �                      <Box>�   �   �          9          <Box flexdirection="row" alignitems="baseline">�   �   �          D          <Title fontsize="1.5rem">Sign Up with social media</Title>�   �   �                  <Rightside>�   �   �                  </Leftside>�   �   �                    </Subtitle>�   �   �          M            Become part of a growing community of avid learners like yourself�   �   �                    <Subtitle>�   �   �          +          <Title>Join our Community</Title>�      �                    />�   ~   �          X            src="http://www.exposureguide.com/images/concert/concert-photography-4e.jpg"�   }                         alt=""�   |   ~                    <Img�   {   }                  <Leftside>�   z   |          %      <Form onSubmit={this.onSubmit}>�   y   {              return (�   x   z          M    const passwordConfirmationErrors = this.state.errors.passwordConfirmation�   w   y          5    const passwordErrors = this.state.errors.password�   v   x          /    const emailErrors = this.state.errors.email�   u   w          5    const usernameErrors = this.state.errors.username�   t   v            render() {�   s   u           �   r   t            }�   q   s              return isValid�   p   r              }�   o   q                })�   n   p                  errors�   m   o                this.setState({�   l   n              if (!isValid) {�   k   m           �   j   l          7    const {errors, isValid} = validateInput(this.state)�   i   k            isValid() {�   h   j           �   g   i            };�   f   h              }�   e   g          
        })�   d   f          =          this.setState({errors: error.response.data.errors})�   c   e                  .catch(error => {�   b   d          
        })�   a   c          &          this.props.login(loginState)�   `   b                    }�   _   a                      errors�   ^   `                      isLoading,�   ]   _                      password,�   \   ^          !            identifier: username,�   [   ]                    const loginState = {�   Z   \          D          const {username, password, isLoading, errors} = this.state�   Y   [                  .then(() => {�   X   Z          
        })�   W   Y          &          this.props.history.push('/')�   V   X                    })�   U   W          ?            text: 'You signed up successfully. Welcome aboard.'�   T   V                      type: 'success',�   S   U          &          this.props.addFlashMessage({�   R   T                  .then(() => {�   Q   S          &        .userSignupRequest(this.state)�   P   R                this.props�   O   Q                })�   N   P          <        errors: {} // clear errors every time we submit form�   M   O                  isLoading: true,�   L   N                this.setState({�   K   M              if (this.isValid()) {�   J   L           �   I   K              e.preventDefault()�   H   J            onSubmit = e => {�   G   I           �   F   H            };�   E   G              })�   D   F          %      [e.target.name]: e.target.value�   C   E              this.setState({�   B   D            onChange = e => {�   A   C           �   @   B            }�   ?   A              }�   >   @                errors: {}�   =   ?          =      timezone: 'Puerto Rico (Atlantic) America/Puerto_Rico',�   <   >                passwordConfirmation: '',�   ;   =                password: '',�   :   <                isLoading: null,�   9   ;                email: '',�   8   :                username: '',�   7   9                google: '',�   6   8                facebook: '',�   5   7              this.state = {�   4   6              super(props)�   3   5            constructor(props) {�   2   4          $class SignupForm extends Component {�   1   3           �   0   2          `�   /   1            color: red;�   .   0            padding-top: 5px;�   -   /          const Error = styled.div`�   ,   .          const Rightside = styled.div``�   +   -           �   *   ,          `�   )   +            margin: 0 auto;�   (   *            flex-direction: column;�   '   )            display: flex;�   &   (          const Leftside = styled.div`�   %   '           �   $   &          `�   #   %            }�   "   $              width: 960px;�   !   #              flex-direction: row;�       "            @media (min-width: 640px) {�      !           �                   margin: 0 auto;�                  align-items: center;�                  justify-content: center;�                  flex-direction: column;�                  display: flex;�                  box-sizing: border-box;�                const Form = styled.form`�                 �                =import {validateInput} from '../../utils/validations/user.js'�                6import {login} from '../../app/actions/authActions.js'�                @import {userSignupRequest} from '../../actions/signupActions.js'�                
// actions�                 �                ,import FaGoogle from 'react-icons/fa/google'�                0import FaFacebook from 'react-icons/fa/facebook'�                } from '../../components'�                  Title�                  Subtitle,�                  Text,�                  Label,�   
               InputLine,�   	               Input,�      
            Img,�      	          	  Button,�                  Box,�                import {�                #import {connect} from 'react-redux'�                Gimport Timezones from '../../components/Selects/Timezones/Timezones.js'�                :import {main, base, anotherOne} from '../../themes/config'�                7import styled, {ThemeProvider} from 'styled-components'�                 &import React, {Component} from 'react'�   �   �          )(SignupForm)5�_�                       '    ����                                                                                                                                                                                                                                                                                                                                                             [*g}    �         �      6import {login} from '../../app/actions/authActions.js'5�_�                       '    ����                                                                                                                                                                                                                                                                                                                                                             [*j�    �         �      @import {userSignupRequest} from '../../actions/signupActions.js'5�_�                       '    ����                                                                                                                                                                                                                                                                                                                                                             [*j�     �         �      Dimport {userSignupRequest} from '../../app/actions/signupActions.js'5�_�                        '    ����                                                                                                                                                                                                                                                                                                                                                             [*j�    �         �      Eimport {userSignupRequest} from '../../aapp/actions/signupActions.js'5��