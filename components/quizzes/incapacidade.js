import IncapacidadeIncial from './incapacidade/IncapacidadeInicial'
import RecebeAuxilioBeneficio from './incapacidade/RecebeAuxilioBeneficio'
import BeneficioCessado from './messages/BeneficioCessado'
import JaFezPedido from './incapacidade/JaFezPedido'
import BeneficioCortado from './incapacidade/BeneficioCortado'
import BeneficioCortadoData from './incapacidade/BeneficioCortadoData'
import BeneficioCortadoTempo from './incapacidade/BeneficioCortadoTempo'
import PedidoNegado from './incapacidade/PedidoNegado'
import PedidoNegadoData from './incapacidade/PedidoNegadoData'
import UltimaContribuicaoInss from './incapacidade/UltimaContribuicaoInss'
import Doenca from './incapacidade/Doenca'
import DoencaCid from './incapacidade/DoencaCid'
import DoencaDetalhe from './incapacidade/DoencaDetalhe'
import DoencaComprovante from './incapacidade/DoencaComprovante'

export default [
  IncapacidadeIncial, RecebeAuxilioBeneficio, BeneficioCessado, JaFezPedido,
  BeneficioCortado, BeneficioCortadoData, BeneficioCortadoTempo, UltimaContribuicaoInss,
  Doenca, DoencaCid, DoencaDetalhe, DoencaComprovante,

  PedidoNegado, PedidoNegadoData
]
