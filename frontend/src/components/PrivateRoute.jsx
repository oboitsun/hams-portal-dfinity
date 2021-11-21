import React from "react";
import RequireAuth from "./RequireAuth";
import { Route } from "react-router";
export default function PrivateRoute({ path, component: Component }) {
  return (
    <Route
      path={path}
      element={
        <RequireAuth>
          <Component />
        </RequireAuth>
      }
    />
  );
}
