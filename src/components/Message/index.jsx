import React,{memo,useState} from 'react'
import { message } from 'antd';

export const success = () => {
  message.success('Se han guardo su categoria ');
};

export const error = () => {
  message.error('Error, no se pudo guardar su categoria');
};

export const warning = () => {
  message.warning('¿Desea esto en verdad?');
};
