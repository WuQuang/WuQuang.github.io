using UnityEngine;

public class CameraPan2D : MonoBehaviour
{
    public float targetY = 5f; // The final Y position to move to
    public float duration = 3f; // Time in seconds to complete the movement

    private Vector3 startPosition;
    private float elapsedTime = 0f;

    void Start()
    {
        startPosition = transform.position; // Save initial position
    }

    void Update()
    {
        if (!EdgeWay.Unity.EZSplashScreen.EZSplashScreens.splashFinished)
            return;

        if (elapsedTime < duration)
        {
            elapsedTime += Time.deltaTime;
            float t = elapsedTime / duration;
            float newY = Mathf.Lerp(startPosition.y, targetY, t);
            transform.position = new Vector3(startPosition.x, newY, transform.position.z);
        }
    }
}
