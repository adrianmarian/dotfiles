Vim�UnDo� �?�)�8$c��ƜoK� � �k�G��;�F���   \   ;import {addFlashMessage} from '../actions/flashMessages.js'   	   "                       [*jh    _�                     
   !    ����                                                                                                                                                                                                                                                                                                                                                             [*g     �   	      \      8import {forgotpassword} from '../actions/authActions.js'5�_�                    \        ����                                                                                                                                                                                                                                                                                                                                                             [*g     �   [            �   Z   \           �   Y   [          }�   X   Z            }�   W   Y              )�   V   X                dispatch�   U   W                },�   T   V                  forgotpassword�   S   U                  addFlashMessage,�   R   T                {�   Q   S               actions: bindActionCreators(�   P   R          
  return {�   O   Q          (const mapDispatchToProps = dispatch => {�   N   P           �   M   O          }�   L   N            }�   K   M              )�   J   L                </Wrapper>�   I   K                  </Masthead>�   H   J                    </Box>�   G   I                      </Button>�   F   H                        send�   E   G          P            <Button onClick={this.forgotpassword} fontsize="20px" padding="6px">�   D   F                      />�   C   E          $              margin="0 20px 0 20px"�   B   D          &              onChange={this.onChange}�   A   C                        name="email"�   @   B                      <Input�   ?   A          7          <Box flexdirection="row" margin="20px 0 0 0">�   >   @                    </Subtitle>�   =   ?                      password.�   <   >          N            Enter your email address and we will send you a link to reset your�   ;   =                    <Subtitle>�   :   <          .          <Title>Forgot your password?</Title>�   9   ;                  <Masthead bg="green">�   8   :                  </Helmet>�   7   9          D          <link rel="canonical" href="https://utter.zone/contact" />�   6   8          )          <title>Utter | Contacts</title>�   5   7          4          <meta name="author" content="Isaac Pak" />�   4   6          D          <meta name="description" content="Reset your password." />�   3   5                    />�   2   4          K            content="width=device-width, initial-scale=1, shrink-to-fit=no"�   1   3                      name="viewport"�   0   2                    <meta�   /   1          "          <meta charset="utf-8" />�   .   0                  <Helmet>�   -   /          ,      <Wrapper history={this.props.history}>�   ,   .              return (�   +   -            render() {�   *   ,           �   )   +            };�   (   *                })�   '   )          
        })�   &   (          +          text: error.response.data.message�   %   '                    type: 'fail',�   $   &          ,        this.props.actions.addFlashMessage({�   #   %          .        console.log('error: ', error.response)�   "   $                .catch(error => {�   !   #                })�       "          
        })�      !                     text: res.data.message�                           type: 'success',�                ,        this.props.actions.addFlashMessage({�                      .then(res => {�                0      .forgotpassword({email: this.state.email})�                    this.props.actions�                  forgotpassword = () => {�                 �                  };�                    })�                %      [e.target.name]: e.target.value�                    this.setState({�                  onChange = e => {�                 �                  }�                    }�                      email: null�                    this.state = {�                    super(props)�                  constructor(props) {�                (class ForgotPassword extends Component {�   
              �   	             <import {forgotpassword} from '../app/actions/authActions.js'�      
          ;import {addFlashMessage} from '../actions/flashMessages.js'�      	          #import {connect} from 'react-redux'�                #import {Helmet} from 'react-helmet'�                Jimport {Box, Button, Input, Subtitle, Title, Wrapper} from '../components'�                .import {Masthead, Navbar} from '../containers'�                7import styled, {ThemeProvider} from 'styled-components'�                %import {Link} from 'react-router-dom'�                (import {bindActionCreators} from 'redux'�                 &import React, {Component} from 'react'�   [   \          @export default connect(null, mapDispatchToProps)(ForgotPassword)5�_�                     	   "    ����                                                                                                                                                                                                                                                                                                                                                             [*jg    �      
   \      ;import {addFlashMessage} from '../actions/flashMessages.js'5��