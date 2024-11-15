export const jwtAuthExpire = token => {
    let parsedToken = '';
    try {
      parsedToken = JSON.parse(Buffer.from(token.split('.')[1], 'base64'));
    } catch (e) {
      console.error('invalid token given');
      return false;
    }
    //   console.log(parsedToken);
  
    if (parsedToken?.exp * 1000 < Date.now()) {
      return true;
    } else if (!parsedToken?.exp) {
      console.error('token is missing exp key');
      return false;
    } else {
      return false;
    }
  };
  