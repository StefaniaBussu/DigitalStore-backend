class Responses {
    static success(res, message, data = null) {
      return res.status(200).json({
        success: true,
        message,
        data,
      });
    }
  
    static created(res, message, data = null) {
      return res.status(201).json({
        success: true,
        message,
        data,
      });
    }
  
    static badRequest(res, message, data = null) {
      return res.status(400).json({
        success: false,
        message,
        data,
      });
    }
  
    static unauthorized(res, message) {
      return res.status(401).json({
        success: false,
        message,
      });
    }
  
    static notFound(res, message) {
      return res.status(404).json({
        success: false,
        message,
      });
    }
  
    static internalServerError(res, message, error = null) {
      return res.status(500).json({
        success: false,
        message,
        error,
      });
    }
  
    static noContent(res) {
      return res.status(204).send();
    }
  }
  
  module.exports = Responses;  