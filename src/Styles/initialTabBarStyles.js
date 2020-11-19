import styled from 'styled-components/native';
import { Platform, Dimensions } from 'react-native'
import { Colors } from '@/Theme'

export const Container = styled.View`
    flex-direction: row;
    height: 80px;
    background-color: ${Colors.white};
/*     box-shadow: 3px 12px 10px rgba(0, 0, 0, 0.32);
    elevation: 10; */
`;

export const TabButton = styled.TouchableOpacity`
  flex: 1;
  /* position: absolute; */
  margin-top: 20;
  justify-content: center;
  align-items: center;
  border-bottom-width: 1;
  border-bottom-color: ${Colors.ligthBlue};
`;

export const TabNavText = styled.Text`
  font-family: 'SFProText-Regular';
  font-size: 12px;
  line-height: 12px;
  margin-top: ${Platform.OS === 'ios' ? 15 : 20};
  margin-bottom: ${Platform.OS === 'ios' ? 15 : 15};
  color: ${props => props.routeActive ? Colors.primary : Colors.ligthBlue };
`;
