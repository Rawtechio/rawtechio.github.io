import unittest
from app import app


class AppTestCase(unittest.TestCase):

    def setUp(self):
        self.client = app.test_client()

    def test_get_homepage(self):
        response = self.client.get("/")
        assert response.status_code == 200

if __name__ == '__main__':
    unittest.main()
