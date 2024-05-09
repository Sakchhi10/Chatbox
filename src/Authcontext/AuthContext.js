import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const loadUser = async () => {
      try {
        const userJson = localStorage.getItem("user");
        if (userJson) {
          setUser(JSON.parse(userJson));
        }
        setLoading(false); // Set loading to false after fetching user data
      } catch (error) {
        console.error("Error loading user:", error);
        setLoading(false); // Set loading to false even if there's an error
      }
    };

    loadUser();
  }, []);

  const signIn = async (userData) => {
    try {
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  const signOut = async () => {
    try {
      setUser(null);
      localStorage.removeItem("user");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const contextValue = {
    user,
    loading, // Include loading in the context value
    signIn,
    signOut,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
