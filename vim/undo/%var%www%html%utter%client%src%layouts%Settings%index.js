Vim�UnDo� ��(U�活J���ϸנn�b<�̔�>�   n                                  Z+i    _�                            ����                                                                                                                                                                                                                                                                                                                            ;          h          V       Z+g     �                
  Sidebar,5�_�                            ����                                                                                                                                                                                                                                                                                                                            :          g          V       Z+h    �         n       �         m    5�_�                            ����                                                                                                                                                                                                                                                                                                                            :          g          V       Z++    �              5�_�                    ;        ����                                                                                                                                                                                                                                                                                                                                       	           V        Z+	     �   :   i        5�_�                            ����                                                                                                                                                                                                                                                                                                                                                V       Z+     �      
        5�_�                            ����                                                                                                                                                                                                                                                                                                                                                V       Z+     �              5�_�                     2       ����                                                                                                                                                                                                                                                                                                                                                V       Z+    �   1   8        �                 &import React, {Component} from 'react'�                5import {NavLink, Route, Link} from 'react-router-dom'�                3import FaCaretDown from 'react-icons/fa/caret-down'�                7import styled, {ThemeProvider} from 'styled-components'�                :import {Masthead, Navbar, Profile} from '../../containers'�                *import {Container} from '../../components'�                 �      	          .const UserSettings = () => <div>settings</div>�      
          %const Misc1 = () => <div>misc 1</div>�   	             %const Misc2 = () => <div>misc 2</div>�   
              �                 const StyledLink = styled(Link)`�                !  color: ${props => props.color};�                `�                 �                 const Dropdown = styled(Button)`�                  background: transparent;�                  border: none;�                  font-size: 1.2rem;�                  outline: none;�                  text-align: left;�                `�                "class Settings extends Component {�                  constructor(props) {�                    super(props)�                 �                ,    this.DropFunc = this.DropFunc.bind(this)�                  }�                 �                  DropFunc(e) {�                     let name = e.target.name�      !          )    let x = document.getElementById(name)�       "          ,    if (x.className.indexOf('show') == -1) {�   !   #                x.className += ' show'�   "   $          7      x.previousElementSibling.className += ' w3-green'�   #   %              } else {�   $   &          4      x.className = x.className.replace(' show', '')�   %   '          V      x.previousElementSibling.className = x.previousElementSibling.className.replace(�   &   (                  ' w3-green',�   '   )          
        ''�   (   *                )�   )   +              }�   *   ,            }�   +   -           �   ,   .            render() {�   -   /              return <Container />�   .   0            }�   /   1          }�   0   2           �   1   2          export default Settings5��