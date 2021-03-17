import { createContext, ReactNode, useCallback, useState } from "react";

interface AppContextData {
  isListInDisplay: boolean;
  isRegisterInDisplay: boolean;
  isStateOpen: boolean;
  selectedStateOption: string;
  isCityOpen: boolean;
  selectedCityOption:string;
  isMonthOpen: boolean;
  selectedMonthOption: string;
  isYearOpen: boolean;
  selectedYearOption: string;
  optionsState: string[];
  optionsCity: string[];
  optionsMonth: string[];
  optionsYear: string[];
  users: User[];
  menuListHandler: () => void;
  menuRegisterHandler: () => void;
  togglingState: () => void;
  togglingCity: () => void;
  togglingMonth: () => void;
  togglingYear: () => void;
  onOptionStateClicked: (value: string) => any;
  onOptionCityClicked: (value: string) => any;
  onOptionMonthClicked: (value: string) => any;
  onOptionYearClicked: (value: string) => any;
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
  submitUser: () => any;
}

interface CountdownProviderProps {
  children: ReactNode;
}

interface User {
  name: string,
  email: string,
  cpf: string,
  address: string;
  state: string;
  cep: string;
  city: string;
  cardName: string;
  expirationDateMonth: string;
  expirationDateYear: string;
  cardNumber: number;
  cardSecurityCode: number;
  submitDate: string;
}

export const AppContext = createContext({} as AppContextData);

export function AppProvider({ children }: CountdownProviderProps){

  const [isListInDisplay, setIsListInDisplay] = useState(false);
  const [isRegisterInDisplay, setIsRegisterInDisplay] = useState(true);

  const menuListHandler = () => {
    setIsListInDisplay(true);
    setIsRegisterInDisplay(false);
  }

  const menuRegisterHandler = () => {
    setIsListInDisplay(false);
    setIsRegisterInDisplay(true);
  }

  const [user, setUser] = useState<User>({} as User)
  const [users, setUsers] = useState<User[]>([])

  const [isStateOpen, setIsStateOpen] = useState(false);
  const [selectedStateOption, setSelectedStateOption] = useState('');
  const [isCityOpen, setIsCityOpen] = useState(false);
  const [selectedCityOption, setSelectedCityOption] = useState('');
  const [isMonthOpen, setIsMonthOpen] = useState(false);
  const [selectedMonthOption, setSelectedMonthOption] = useState('');
  const [isYearOpen, setIsYearOpen] = useState(false);
  const [selectedYearOption, setSelectedYearOption] = useState('');

  const optionsState = ["ES", "MG", "RJ", "RN", "RS", "SC", "SP"];
  const optionsCity =["Betim","Belo Horizonte", "Contagem", "Ibitité"] 
  const optionsMonth = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
  const optionsYear =["2021","2022", "2023", "2024", "2025", "2026"] 

  const togglingState = () => {
    if(isStateOpen){
      setIsStateOpen(false);
    }else{
      setIsStateOpen(true);
    }
    setIsCityOpen(false)
  }
  const togglingCity = () => {
    if(isCityOpen){
      setIsCityOpen(false);
    }else{
      setIsCityOpen(true);
    }
    setIsStateOpen(false)
  }

  const togglingMonth = () => {
    if(isMonthOpen){
      setIsMonthOpen(false);
    }else{
      setIsMonthOpen(true);
    }
    setIsYearOpen(false)
  }

  const togglingYear = () => {
    if(isYearOpen){
      setIsYearOpen(false);
    }else{
      setIsYearOpen(true);
    }
    setIsMonthOpen(false)
  }

  const onOptionStateClicked = (value: string) => () => {
    setSelectedStateOption(value);
    setIsStateOpen(false);
    setUser({
      ...user,
      state: value
    });
  };

  const onOptionCityClicked = (value: string) => () => {
    setSelectedCityOption(value);
    setIsCityOpen(false);
    setUser({
      ...user,
      city: value
    });
  };

  const onOptionMonthClicked = (value: string) => () => {
    setSelectedMonthOption(value);
    setIsMonthOpen(false);
    setUser({
      ...user,
      expirationDateMonth: value
    });
  };

  const onOptionYearClicked = (value: string) => () => {
    setSelectedYearOption(value);
    setIsYearOpen(false);
    const today = new Date();
    setUser({
      ...user,
      expirationDateYear: value,
      submitDate: `${today.getDate()}-${(today.getMonth()+1)}-${today.getFullYear()}`
    });
  };
  
  const handleChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.currentTarget.name]: e.currentTarget.value
    });
  }, [user])
  console.log(user);

  const submitUser = () => {
    console.log(users)
    setUsers([
      ...users,
      user
    ])
    setIsListInDisplay(true);
    setIsRegisterInDisplay(false);
  }
  return(
    <AppContext.Provider value={{
      isListInDisplay,
      isRegisterInDisplay,
      isStateOpen,
      selectedStateOption,
      isCityOpen,
      selectedCityOption,
      isMonthOpen,
      selectedMonthOption,
      isYearOpen,
      selectedYearOption,
      optionsState,
      optionsCity,
      optionsMonth,
      optionsYear,
      users,
      menuListHandler,
      menuRegisterHandler,
      togglingState,
      togglingCity,
      togglingMonth,
      togglingYear,
      onOptionStateClicked,
      onOptionCityClicked,
      onOptionMonthClicked,
      onOptionYearClicked,
      handleChange,
      submitUser,
    }}>
      {children}
    </AppContext.Provider>
  )
}