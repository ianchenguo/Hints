'use strict';

describe('Service: firebaseModel', function () {

  // load the service's module
  beforeEach(module('hintsApp.core.firebaseModel'));

  // instantiate service
  var firebaseModel, FirebaseUrl;
  beforeEach(inject(function (_firebaseModel_, _FirebaseUrl_) {
    firebaseModel = _firebaseModel_;
    FirebaseUrl = _FirebaseUrl_;

  }));

  it('should create a Firebase object', function () {

    var ref = firebaseModel.ref;
    expect(ref).toBeDefined();
    expect(ref instanceof Firebase).toBe(true);
  });

});
