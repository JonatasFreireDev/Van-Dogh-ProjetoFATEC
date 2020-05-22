import axios from 'axios';

export default async function verifyCEP(cep) {
   if (cep.length > 10 || !Number.isInteger(cep)) {
      return false;
   }

   const isCep = await axios.get(`viacep.com.br/ws/${cep}/json/`);

   if (!isCep) {
      return false;
   }

   return isCep.data;
}
