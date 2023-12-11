from channels.routing import ProtocolTypeRouter, URLRouter
from django.urls import path
from myapp.consumers import ChatConsumer 

websocket_urlpatterns = [
    path('ws/chat/<room_name>/', consumers.ChatConsumer.as_asgi()),
]

application = ProtocolTypeRouter({
    'websocket': URLRouter(websocket_urlpatterns),
})
