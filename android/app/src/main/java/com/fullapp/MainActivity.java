package com.fullapp;
import android.os.Bundle; // here
// import com.facebook.react.ReactActivity;
// import com.cboy.rn.splashscreen.SplashScreen; // here
import org.devio.rn.splashscreen.SplashScreen;

import com.reactnativenavigation.NavigationActivity;

import com.reactnativenavigation.react.NavigationReactNativeHost;

// import com.facebook.react.ReactActivityDelegate;
// import com.facebook.react.ReactRootView;

public class MainActivity extends NavigationActivity {

  /**
   * Returns the instance of the {@link ReactActivityDelegate}. There the RootView is created and
   * you can specify the rendered you wish to use (Fabric or the older renderer).
   */

  // @Override
  // protected void onCreate(Bundle savedInstanceState) {
  //   SplashScreen.show(this);  // here
  //   super.onCreate(savedInstanceState);
  // }

  // @Override
  // protected ReactActivityDelegate createReactActivityDelegate() {
  //   return new MainActivityDelegate(this, getMainComponentName());
  // }

  // public static class MainActivityDelegate extends ReactActivityDelegate {
  //   public MainActivityDelegate(ReactActivity activity, String mainComponentName) {
  //     super(activity, mainComponentName);
  //   }

  //   @Override
  //   protected ReactRootView createRootView() {
  //     ReactRootView reactRootView = new ReactRootView(getContext());
  //     // If you opted-in for the New Architecture, we enable the Fabric Renderer.
  //     reactRootView.setIsFabric(BuildConfig.IS_NEW_ARCHITECTURE_ENABLED);
  //     return reactRootView;
  //   }
  // }
}
