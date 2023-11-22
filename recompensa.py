def reward_function(params):
    # Parámetros de entrada
    track_width = params['track_width']
    distance_from_center = params['distance_from_center']
    all_wheels_on_track = params['all_wheels_on_track']
    speed = params['speed']
    steering_angle = abs(params['steering_angle']) # Se toma el valor absoluto del ángulo de dirección
    progress = params['progress']
    steps = params['steps']

    # Parámetros de penalización y recompensa
    collision_penalty = 0.6
    off_track_penalty = 0.6
    speed_reward = 0.9
    steering_penalty = 0.8
    center_reward = 0.5
    progress_reward = 1

    # Penalizar si el coche se sale del circuito
    if not all_wheels_on_track:
        return off_track_penalty
    
    # Penalizar si hay colisión
    if params['is_crashed']:
        return collision_penalty
    
    # Penalizar cambios bruscos en el ángulo de dirección
    if steering_angle > 25:
        return steering_penalty
    
    # Recompensar por mantenerse cerca de la línea central
    reward = center_reward * (1.0 - (distance_from_center / (0.5 * track_width)))
    
    # Recompensar la velocidad en secciones rectas
    if speed > 1.25:
        reward += speed_reward
    
    # Recompensar por el progreso en la pista
    reward += progress_reward * progress / steps
    
    return float(reward)