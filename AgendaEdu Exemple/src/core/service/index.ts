import axios from 'axios';

const fakeData = { 
        data: { 
            attributes: { 
                url:  'apppartner://sso/7c0153ca-f282-11ed-a05b-0242ac120003'
            }
        }
    }

export const getSandboxData = async (sandbox: string) => {
    try {
      const response = await axios.get(`${sandbox}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar os dados do usuário:', error);
    }
  };


  export const getFakeData = async (sandbox: string) => {
    try {
      const response =  fakeData;
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar os dados do usuário:', error);
    }
  };