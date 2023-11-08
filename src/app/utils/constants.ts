import { CURRENT_USER_RESET } from "../../../../../backend/auth/src/domain/constants/entities";
import { environment } from "../../environments/environment";
import { Car, DriverInfo, EstimatedRide, IPagesNames, MarkerPosition, NewRideEventDto, PagesNamesType, RideDriver, RideInfo, SelectedRide, ShowPlanYourRideComponents } from "../../../../geo-l-react-ionic/typesAndInterfaces";

const ENV_VARS = environment;

export const APP_NAME = "Geo L";

export const PUBLIC_ROUTES = {
  WELCOME: "/welcome",
  CONTINUE_WITH: "/continue-with",
  USER_EMAIL: "/user-email",
  VERIFY_EMAIL: "/verify-email",
  VERIFY_ACCOUNT: "/verify-account",
  CREATE_USER_NAME: "/create-user-name",
  RESET_PASSWORD: "/reset-password",
  LOGIN_WITH_EMAIL_AND_CODE: "/login-with-email-and-code",
  SIGN_UP_WITH_EMAIL: "/sign-up-with-email",
  LOGIN_WITH_EMAIL_AND_PASSWORD: "/login-with-email-and-password",
  FORGOT_PASSWORD: "/forgot-password",
};

// routes tipo : googledrive.leandrocode/private/*
export const AUTHENTICATED_ROUTES = {
  TABS: "/tabs",
  HOME: "/tabs/home",
  PLAN_YOUR_RIDE: "/plan-your-ride",
  SERVICES: "/tabs/services",
  ACTIVITY: "/tabs/activity",
  ACCOUNT: "/tabs/account",
  TEST: "/tabs/test",
};

export const PAGES_NAMES: IPagesNames = {
  HOME: "home",
  SERVICES: "services",
  ACTIVITY: "activity",
  ACCOUNT: "account",
};

// AUTH MICRO
export const HTTP_API_AUTH_RESOURCE = `${ENV_VARS.API_HTTP_AUTH}/api/auth`;
export const HTTP_API_USERS_RESOURCE = `${ENV_VARS.API_HTTP_AUTH}/api/users`;
export const GOOGLE_OAUTH_ENDPOINT = `${ENV_VARS.API_HTTP_AUTH}/redirect`;
// ./AUTH MICRO


export const HTTP_API_REST_COUNTRIES = "https://restcountries.com/v3.1";

// PAYMENT MICRO
export const HTTP_API_PAYMENTS_RESOURCE = `${ENV_VARS.API_HTTP_PAYMENT}/api/payments`;
// PAYMENT MICRO

// MAIL MICRO
export const HTTP_API_MAILS_RESOURCE = `${ENV_VARS.API_HTTP_MAIL}/api/mails`;
// ./MAIL MICRO

// CHAT MICRO
export const HTTP_API_ROOMS_RESOURCE = `${ENV_VARS.API_HTTP_CHAT}/api/rooms`;
export const HTTP_API_MESSAGES_RESOURCE = `${ENV_VARS.API_HTTP_CHAT}/api/messages`;
export const WS_API_ROOMS_RESOURCE = `${ENV_VARS.API_WS_CHAT}/api/rooms`;
// ./CHAT MICRO

// ? LOCAL STORAGE
export const CUSTOM_LOCAL_STORAGE_KEYS = {
  AUTH_JWT: "LOCAL_STORAGE_AUTH_JWT",
};
// ? ./LOCAL STORAGE


// WS CHATS
export const MESSAGE_TYPES = {
  RECV: "recv",
  SELF: "self",
}

export const ACTION_TYPES = {
  // TODO: refactor ride_new_ride, etc
  NEW_RIDE: "new_ride",
  RIDE_ACCEPTED: "ride_accepted",
  RIDE_UPDATED: "ride_updated",
  JOIN_ROOM:     "join_room",

  CHAT_NEW_USER: "chat_new_user",
  CHAT_USER_LEFT: "chat_user_left",
  CHAT_NEW_MESSAGE: "chat_new_message",
}

export const INIT_ROOMS = {
  DRIVERS: "drivers",
  PASSENGERS: "passengers",
}

export const RIDE_STATUS = {
  // Para dibujar el mapa
  PENDING: "pending",
  ACCEPTED: "accepted",
  // SIN UTILIZAR
  CANCELED: "canceled",

  // quizas podría servir para decirle que no hay drivers en este momento cuando llegue a 0 xd
  //REJECTED: "rejected",
  // podría servir para enviarselo al usuario en concreto por el array de chat para evitar iterar el arreglo enorme de passenger
  //FINISHED: "finished",
}

export const NEW_RIDE_RESET: NewRideEventDto = {
  id: "",
  status: "",
  destinationLocation: "",
  originLocation: "",
  passenger: CURRENT_USER_RESET,
  travelMode: ""
}

export const SELECTED_RIDE_RESET: SelectedRide = {
  id: "",
  distance: 0,
  travelTimeInMinutes: 0,
  destination: "",
}
// ./WS CHATS

// ? APP SLICE

export const SHOW_PLAN_YOUR_RIDE_COMPONENTS_RESET: ShowPlanYourRideComponents = {
  selectOriginLocation: false,
  selectRide: false,
  rideRequested: false,
  rideAccepted: false,
  formRide: false,
  acceptingPassengers: false,
  chat: false,
}

// ? ./APP SLICE



// ? RIDE SLICE

export const CAR_RESET: Car = {
  img: "",
  model: "",
  color: "",
  licensePlate: "",
};

export const DRIVER_INFO_RESET: DriverInfo = {
  id: "",
  username: "",
  ridesDone: 0,
  averageRating: 0,
};

export const RIDE_INFO_RESET: RideInfo = {
  origin: "",
  destination: "",
  travelMode: "",
  optimizeWaypoints: false,
  waypoints: [],
};

export const RIDE_DRIVER_RESET: RideDriver = {
  car: CAR_RESET,
  driverInfo: DRIVER_INFO_RESET,
  rideInfo: RIDE_INFO_RESET,
};

export const ESTIMATED_RIDE_RESET: EstimatedRide = {
  directionsResult: null,
  distance: 0,
  travelTimeInMinutes: 0,
  costPerPerson: 0
};

export const MARKER_POSITION_RESET: MarkerPosition = {
  lat: 0,
  lng: 0,
}

// ? ./RIDE SLICE


export const TRAVEL_COST = {
  FIXED: 100,
  KM: 10,
  MINUTE: 20,
}